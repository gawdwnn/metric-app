import { gql } from "@apollo/client";

export const FETCH_METRICS = gql`
  query Metrics {
    metrics {
      createdAt
      id
      name
      timestamp
      value
    }
  }
`;
