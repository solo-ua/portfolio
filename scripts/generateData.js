import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '../../') // c:\Users\User\Documents\Portfolio\MariiaKhiershi
const ASSETS_DEST = path.resolve(__dirname, '../public/assets')
const DATA_FILE = path.resolve(__dirname, '../src/data/portfolio.js')

const CATEGORIES = [
  '3D Renders', 'Illustrations', 'Logos', 'Posters', 
  'Social Media', 'T-shirt Prints', 'UI Design'
]

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const items = []
let idCounter = 1

function processCategory(catName) {
  const catPath = path.join(ROOT_DIR, catName)
  if (!fs.existsSync(catPath)) return

  const entries = fs.readdirSync(catPath, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // It's a subcategory
      const subCatName = entry.name
      processFolder(catPath, entry.name, catName, subCatName)
    } else if (entry.isFile() && entry.name.endsWith('.webp')) {
      // It's an image in the root of the category
      processFile(catPath, entry.name, catName, null)
    }
  }
}

function processFolder(basePath, folderName, catName, subCatName) {
  const folderPath = path.join(basePath, folderName)
  const entries = fs.readdirSync(folderPath, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.webp')) {
      processFile(folderPath, entry.name, catName, subCatName)
    }
  }
}

function processFile(filePath, fileName, catName, subCatName) {
  const safeCatName = catName.toLowerCase().replace(/[^a-z0-9]/g, '')
  const destDirName = subCatName ? 
    `${safeCatName}/${subCatName.toLowerCase().replace(/[^a-z0-9]/g, '')}` : 
    safeCatName
    
  const destDir = path.join(ASSETS_DEST, destDirName)
  ensureDir(destDir)
  
  const destPath = path.join(destDir, fileName)
  const sourcePath = path.join(filePath, fileName)
  
  fs.copyFileSync(sourcePath, destPath)
  
  const srcUrl = `/MariiaKhiershi/assets/${destDirName}/${fileName}`
  
  items.push({
    id: idCounter++,
    cat: catName,
    subCat: subCatName || 'General',
    src: srcUrl,
    alt: `${catName} ${subCatName || ''} ${fileName.split('.')[0]}`.trim()
  })
}

// Clear old assets and data
if (fs.existsSync(ASSETS_DEST)) {
  fs.rmSync(ASSETS_DEST, { recursive: true, force: true })
}
ensureDir(ASSETS_DEST)

console.log('Processing assets...')
for (const cat of CATEGORIES) {
  processCategory(cat)
}

const dataContent = `export const BASE = '/MariiaKhiershi'\n\nexport const items = ${JSON.stringify(items, null, 2)}\n\nexport const categories = [...new Set(items.map(i => i.cat))]\nexport const subcategories = items.reduce((acc, item) => {\n  if (!acc[item.cat]) acc[item.cat] = new Set()\n  acc[item.cat].add(item.subCat)\n  return acc\n}, {})\n\n// Convert Sets to Arrays\nObject.keys(subcategories).forEach(k => subcategories[k] = [...subcategories[k]])\n`

fs.writeFileSync(DATA_FILE, dataContent)
console.log(`Generated data for ${items.length} items.`)
