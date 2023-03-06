import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity()
@ObjectType()
export default class Metric {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field(() => String, {description: 'Meric name'})
  @Column()
  name: string;

  @Field(() => String, {description: 'Meric value'})
  @Column()
  value: string;

  @Field(() => Date, {description: 'Meric timestamp'})
  @Column()
  timestamp: Date;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
