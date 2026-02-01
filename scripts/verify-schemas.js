import { Glob } from 'bun'

const EXPECTED_SCHEMA = 'http://json-schema.org/draft-07/schema#'

const errors = []
let count = 0

for await (let path of new Glob('source/**/*.json').scan('.')) {
  count++
  let content = await Bun.file(path).json()
  let schema = content['$schema']

  if (schema !== EXPECTED_SCHEMA) {
    errors.push(`${path}: Expected "$schema" to be "${EXPECTED_SCHEMA}", got "${schema}"`)
  }
}

if (errors.length > 0) {
  console.error('Schema verification failed:')
  errors.forEach(error => console.error(`  - ${error}`))
  process.exit(1)
} else {
  console.log(`All ${count} schemas have correct "$schema" property.`)
}
