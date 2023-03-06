import { graphql } from "../gql";

export const FETCH_METRICS = graphql(`
  query Metrics {
    metrics {
      createdAt
      id
      name
      timestamp
      value
    }
  }
`)