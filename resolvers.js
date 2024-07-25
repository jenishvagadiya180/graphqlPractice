import { Cat } from "./models/Cat.js";


export const resolvers = {
    Query: {
        hello: () => "hi",
        cats: async () => await Cat.find()
    },

    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            return kitty;
        }
    }
}