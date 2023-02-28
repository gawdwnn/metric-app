import {useQuery} from '@apollo/client';
import { FETCH_METRICS } from '../queries/fetchMetrics';

export default function useFetchMetrics() {
  const {data, loading, error} = useQuery(FETCH_METRICS);
  return {data: data?.metrics, loading, error};
}