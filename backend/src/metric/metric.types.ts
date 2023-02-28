import { Field, InputType, ObjectType } from "type-graphql";
import { IsDateString, IsString } from "class-validator";
import Metric from "./metric.entity";


@ObjectType()
export class MetricOutput extends Metric {}

@InputType()
export class PostMetricInput {
  @Field(() => String)
  @IsString()
  name: string

  @Field(() => String)
  @IsString()
  value: string

  @Field(() => String)
  @IsDateString()
  timestamp: Date
}
