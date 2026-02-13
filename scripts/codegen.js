import template from './template.js' with { type: 'text' }

import { $ } from 'bun'

let path = x => x.join('/')

let schema = x => path(x).replaceAll('/', '_')

let raw = await $`find ./source/contracts -type f -name '*.json'`

let exists = raw
  .text()
  .split('\n')
  .filter(Boolean)
  .map(x => x.replace('./source/contracts/', '').replace('.json', '').split('/'))

let imports = exists
  .map(x => `import ${schema(x)} from './contracts/${path(x)}.json' with { type: 'json' }`)
  .join('\n')

let contracts = exists
  .map(x => `'${path(x)}'`)
  .join(',\n    ')

let schemas = exists
  .map(x => schema(x))
  .join(',\n    ')

let contractSchema = exists
  .map(x => `'${path(x)}': ${schema(x)}`)
  .join(',\n    ')

Bun.write(
  './source/index.js',
  template
    .replace('/* imports */', imports)
    .replace('/* contracts */', contracts)
    .replace('/* schemas */', schemas)
    .replace('/* contract -> schema */', contractSchema),
)
