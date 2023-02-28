import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import MetricEntity from "./metric/metric.entity";
import dataSource from "./ormconfig";

const bootstrap = async () => {
  // Create connection with DB
  dataSource
    .initialize()
    .then(() => {
      console.log(`Data source has been initialized`);
    })
    .catch((err) => {
      console.error(`Data source initialization error`, err);
    });

  // intialise dependency injection
  const MetricRepository = dataSource.getRepository(MetricEntity).extend({});
  Container.set("MetricRepository", MetricRepository);

  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
    emitSchemaFile: true,
    container: Container,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
};

bootstrap();
