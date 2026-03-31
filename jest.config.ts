import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const baseConfig: Config = {
  testEnvironment: 'node',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
}

// next/jest on Windows uses backslash-based ignore patterns that block ESM packages.
// remark and its ecosystem are pure ESM and cannot be required as CJS.
// Solution: replace transformIgnorePatterns with a pattern that only ignores
// known-CJS packages, allowing all ESM deps (remark tree) to be transpiled.
const customConfig = async (): Promise<Config> => {
  const resolved = await createJestConfig(baseConfig)()
  return {
    ...resolved,
    // Only skip transformation for CSS modules; transform everything else including node_modules.
    // This is intentional: remark and its ~40 transitive deps are pure ESM and need Babel/SWC.
    transformIgnorePatterns: [
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  }
}

export default customConfig
