import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
   schema: "http://backend:4000/",
   documents: ['src/**/*.{tsx,ts}'],
   ignoreNoDocuments: true,
   generates: {
      './src/api/gql/': {
        preset: 'client',
      }
   }
}
export default config