import { Methods, Mode, Roles, Routes } from '@shakerquiz/utilities'

let identifier = (method, route, role) => method + '_' + route.replaceAll('/', '_') + '_' + role

let property = (method, route, role) => method + '/' + route + '/' + role

let pathnames = Methods
  .flatMap(method => Routes.map(route => [method, route]))
  .flatMap(([method, route]) => Roles.concat(Mode['Unknown']).map(role => [method, route, role]))
  .map(([method, route, role]) => ({ method, route, role }))

Promise
  .all(pathnames.map(({ method, route, role }) =>
    Deno
      .lstat('./source/contracts/' + method + '/' + route + '/' + role + '.json')
      .then(() => ({ method, route, role }))
      .catch(() => null)
  ))
  .then(components =>
    Deno.writeTextFile(
      './source/index.js',
      ''
        + components
          .filter(Boolean)
          .reduce((text, { method, route, role }) =>
            text
            + 'import'
            + ' '
            + identifier(method, route, role)
            + ' '
            + 'from'
            + "'"
            + './contracts/' + method + '/' + route + '/' + role + '.json'
            + "'"
            + ' '
            + "with { type: 'json' }"
            + '\n', '')
        + '\n'
        + 'export const Schema = Object.freeze({'
        + '\n'
        + components
          .filter(Boolean)
          .reduce((text, { method, route, role }) =>
            text
            + '\t'
            + "'"
            + property(method, route, role)
            + "'"
            + ':'
            + ' '
            + identifier(method, route, role)
            + ','
            + '\n', '')
        + '})'
        + '\n',
    )
  )
