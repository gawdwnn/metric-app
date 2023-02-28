import {useMutation} from '@apollo/client';
import { POST_METRICS } from '../mutations/postMetrics';

export default function usePostMetrics() {
  const [postMetric, {loading}] = useMutation(POST_METRICS)
  return {postMetric, loading}
}