import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { MetricService } from "./metric.service";
import { MetricOutput, PostMetricInput } from "./metric.types";

@Service()
@Resolver()
export default class MetricResolver {
  constructor(private metricService: MetricService) {}

  @Query(() => [MetricOutput])
  async metrics(): Promise<MetricOutput[]> {
    return this.metricService.getMetrics();
  }

  @Mutation(() => MetricOutput)
  async postMetric(@Arg('input') input: PostMetricInput): Promise<MetricOutput> {
    return this.metricService.postMetric(input);
  }
}
