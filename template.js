/* imports */

export const Contract = Object.freeze({/* contracts */})

export const Contracts = Object.freeze(Object.values(Contract))

export const inferContract = Object.freeze(
  /** @returns {typeof Contract[keyof typeof Contract] | 'Unknown'} */
  x => Contract[x] ?? 'Unknown',
)

export const ContractSchema = Object.freeze({/* schemas */})

export const inferContractSchema = Object.freeze(
  /** @returns {typeof ContractSchema[keyof typeof ContractSchema] | 'Unknown'} */
  x => ContractSchema[x] ?? 'Unknown',
)
