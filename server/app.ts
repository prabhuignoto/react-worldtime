require("newrelic");
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";
import WorldTimeDatasource from "./DataSource";
import Morgan from "morgan";
import express from "express";

if (process.env.NODE_ENV === "development") {
  config();
}

const app = express();

app.use(Morgan("tiny"));

const Server = new ApolloServer({
  dataSources: () => ({
    worldTimeAPI: new WorldTimeDatasource()
  }),
  typeDefs,
  resolvers
});

Server.applyMiddleware({ app });

app.listen(process.env.PORT || 9000, () => console.log(`API Started and Running`));
