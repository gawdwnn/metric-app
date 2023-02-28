import { Service, Inject, } from "typedi";
import { Repository } from "typeorm";
import Metric from "./metric.entity";
import { PostMetricInput } from "./metric.types";

@Service()
export class MetricService {
  constructor(@Inject("MetricRepository") private metricRepository: Repository<Metric>) {}

  getMetrics(): Promise<Metric[]> {
    return this.metricRepository.find()
  }

  async postMetric(postMetricInput: PostMetricInput) {
    const metricValue = await this.metricRepository.create(postMetricInput);
    return this.metricRepository.save(metricValue);
  }
}
