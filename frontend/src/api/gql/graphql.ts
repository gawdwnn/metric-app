/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Metric = {
  __typename?: 'Metric';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  timestamp: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type MetricOutput = {
  __typename?: 'MetricOutput';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  timestamp: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postMetric: MetricOutput;
};


export type MutationPostMetricArgs = {
  input: PostMetricInput;
};

export type PostMetricInput = {
  name: Scalars['String'];
  timestamp: Scalars['DateTime'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  metrics: Array<MetricOutput>;
};

export type PostMetricMutationVariables = Exact<{
  input: PostMetricInput;
}>;


export type PostMetricMutation = { __typename?: 'Mutation', postMetric: { __typename?: 'MetricOutput', id: string, name: string, value: string, timestamp: any } };

export type MetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type MetricsQuery = { __typename?: 'Query', metrics: Array<{ __typename?: 'MetricOutput', createdAt: any, id: string, name: string, timestamp: any, value: string }> };


export const PostMetricDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostMetric"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostMetricInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postMetric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<PostMetricMutation, PostMetricMutationVariables>;
export const MetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<MetricsQuery, MetricsQueryVariables>;