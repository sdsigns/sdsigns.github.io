import { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '')
        const assetPath = path.resolve(__dirname, 'assets', filename)
        if (fs.existsSync(assetPath)) {
          return assetPath
        }
      }
      return null
    },
  }
}
