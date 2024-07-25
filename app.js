import { ApolloServer, gql } from "apollo-server-express"
import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
dotenv.config()

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app });

    console.log('process.env.DB_URL :>> ', process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


    app.listen({ port: process.env.PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    })
}

startServer();