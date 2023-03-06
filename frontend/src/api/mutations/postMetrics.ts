import { graphql } from "../gql";

export const POST_METRICS = graphql(`
  mutation PostMetric($input: PostMetricInput!) {
    postMetric(input: $input) {
      id
      name
      value
      timestamp
    }
  }
`)
