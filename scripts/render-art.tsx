// Renders card illustrations to static SVG + PNG so they can be inspected without a dev server.
// Usage: npm run art -- [id ...]      (no ids = all 22 + card back + gallery)
// Output: qa-shots/art/<id>.svg, qa-shots/art/<id>.png, qa-shots/art/gallery.png
import { renderToStaticMarkup } from 'react-dom/server'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { CardArt } from '../src/art/CardArt.tsx'
import { CardBack } from '../src/art/CardBack.tsx'
import { DECK } from '../src/data/deck.ts'
import type { CardId } from '../src/data/types.ts'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT = path.resolve('qa-shots/art')
fs.mkdirSync(OUT, { recursive: true })

const args = process.argv.slice(2)
const ids = (args.length ? args : DECK.map((d) => d.id)) as CardId[]
const unknown = ids.filter((id) => !DECK.some((d) => d.id === id))
if (unknown.length) throw new Error(`unknown ids: ${unknown.join(', ')}`)

function shot(html: string, png: string, w: number, h: number) {
  const file = png.replace(/\.png$/, '.html')
  fs.writeFileSync(file, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#140f26}svg{display:block}</style>${html}`)
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
    `--window-size=${w},${h}`, `--screenshot=${png}`, `file://${file}`,
  ], { stdio: 'ignore' })
}

for (const id of ids) {
  const svg = renderToStaticMarkup(<CardArt id={id} />).replace('<svg ', '<svg width="240" height="300" ')
  fs.writeFileSync(path.join(OUT, `${id}.svg`), svg)
  shot(svg, path.join(OUT, `${id}.png`), 240, 300)
  console.log('rendered', id)
}

if (!args.length) {
  const back = renderToStaticMarkup(<CardBack />).replace('<svg ', '<svg width="240" height="380" ')
  shot(back, path.join(OUT, 'card-back.png'), 240, 380)
  const cells = DECK.map(
    (d) => `<figure style="margin:0;text-align:center;color:#f7dc9c;font:12px sans-serif">${renderToStaticMarkup(<CardArt id={d.id} />).replace('<svg ', '<svg width="160" height="200" ')}<figcaption>${d.roman} ${d.nameKo}</figcaption></figure>`,
  ).join('')
  shot(`<div style="display:grid;grid-template-columns:repeat(6,160px);gap:12px;padding:12px">${cells}</div>`, path.join(OUT, 'gallery.png'), 6 * 172 + 12, 4 * 232 + 12)
  console.log('rendered card-back + gallery')
}
