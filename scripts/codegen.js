import template from './template.js' with { type: 'text' }

import { Methods, Mode, Roles, Routes } from '@shakerquiz/utilities'

let path = x => x.join('/')

let schema = x => path(x).replaceAll('/', '_')

let all = Methods
  .flatMap(method => Routes.map(route => [method, route]))
  .flatMap(([method, route]) => Roles.concat(Mode['Unknown']).map(role => [method, route, role]))

let exists = await Promise
  .all(all.map(x => Bun.file(`./source/contracts/${path(x)}.json`).exists()))
  .then(exists => exists.reduce((set, e, i) => e ? set.add(all[i]) : set, new Set()))
  .then(Array.from)

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
