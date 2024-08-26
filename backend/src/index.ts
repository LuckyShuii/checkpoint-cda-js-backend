import "reflect-metadata";
import "dotenv/config";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { dataSource } from "./config/db";
import { startStandaloneServer } from "@apollo/server/standalone";
import CountriesResolver from "./resolvers/CountriesResolver";
import ContinentResolver from "./resolvers/ContinentResolver";

export default CountriesResolver;

const start = async () => {
  await dataSource.initialize();
  
  const schema = await buildSchema({
    resolvers: [
      CountriesResolver,
      ContinentResolver
    ]
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 Server ready at ${url}`);
};

start();
