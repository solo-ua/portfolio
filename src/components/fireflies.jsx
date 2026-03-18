import { useEffect, useRef } from "react";

class Firefly {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;

    this.size = Math.random() * 2 + 1;

    // flicker
    this.time = Math.random() * 1000;
    this.flickerSpeed = Math.random() * 0.005 + 0.01;
    this.opacity = Math.random();

    // drift settings
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 0.4 + 0.2;
    this.isFollowing = false;
  }

  update(width, height, mouse) {
    if (!this.isFollowing) {
      // Smooth wander logic (curved paths)
      this.angle += (Math.random() - 0.5) * 0.1; // slow turn
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
    }

    // mouse attraction & interaction
    if (mouse.current.x !== null) {
      const dx = mouse.current.x - this.x;
      const dy = mouse.current.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseSpeed = Math.sqrt(
        mouse.current.vx ** 2 + mouse.current.vy ** 2,
      );

      // capture logic (only capture if moving slow enough)
      if (!this.isFollowing && dist < 100 && mouseSpeed < 2) {
        this.isFollowing = true;
      }

      // escape logic
      if (this.isFollowing) {
        if (dist > 250 || mouseSpeed > 3) {
          this.isFollowing = false;
          // instant dampening on breakaway
          this.vx *= 0.5;
          this.vy *= 0.5;
        }
      }

      if (this.isFollowing && dist > 0) {
        const force = 0.15; // stronger pull when following
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;

        // don't pile into cursor
        if (dist < 30) {
          this.vx -= (dx / dist) * 0.2;
          this.vy -= (dy / dist) * 0.2;
        }

        // update angle for smooth handover back to drift
        this.angle = Math.atan2(this.vy, this.vx);
      }
    } else if (this.isFollowing) {
      this.isFollowing = false;
      this.vx *= 0.5;
      this.vy *= 0.5;
      this.angle = Math.atan2(this.vy, this.vx);
    }

    // dual speed limit
    const speedLimit = this.isFollowing ? 1.5 : 0.6;
    const currentSpeed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
    if (currentSpeed > speedLimit && currentSpeed > 0) {
      const ratio = speedLimit / currentSpeed;
      this.vx *= ratio;
      this.vy *= ratio;
    }

    // friction (slightly reduced for smoother slow flight)
    this.vx *= 0.98;
    this.vy *= 0.98;

    this.x += this.vx;
    this.y += this.vy;

    // wrap around edges
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // flicker (independent per firefly)
    this.time += 1;
    this.opacity = 0.5 + Math.sin(this.time * this.flickerSpeed) * 0.5;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(255, 255, 180, ${this.opacity})`;
    ctx.shadowColor = `rgba(255,255,150,${this.opacity})`;
    ctx.shadowBlur = 10;

    ctx.fill();
  }
}

export default function Fireflies() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null, vx: 0, vy: 0, lastTime: 0 });

  useEffect(() => {
    mouse.current.lastTime = Date.now();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const fireflies = [];
    const count = 50;

    // create particles
    for (let i = 0; i < count; i++) {
      fireflies.push(new Firefly(width, height));
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      fireflies.forEach((f) => {
        f.update(width, height, mouse);
        f.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      const newWidth = canvas.offsetWidth;
      const newHeight = canvas.offsetHeight;

      if (newWidth === 0 || newHeight === 0) return;

      // redistribute fireflies if they were stuck at 0,0
      if ((width === 0 || !width) && newWidth > 0) {
        fireflies.forEach((f) => {
          f.x = Math.random() * newWidth;
          f.y = Math.random() * newHeight;
        });
      }

      width = newWidth;
      height = newHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
    handleResize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      const now = Date.now();
      const dt = Math.max(1, now - mouse.current.lastTime);

      mouse.current.vx = (newX - (mouse.current.x ?? newX)) / dt;
      mouse.current.vy = (newY - (mouse.current.y ?? newY)) / dt;

      mouse.current.x = newX;
      mouse.current.y = newY;
      mouse.current.lastTime = now;
    };

    const handleLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
      mouse.current.vx = 0;
      mouse.current.vy = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
