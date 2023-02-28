import { gql } from "@apollo/client";

export const POST_METRICS = gql`
  mutation PostMetric($input: PostMetricInput!) {
    postMetric(input: $input) {
      id
      name
      value
      timestamp
    }
  }
`;
