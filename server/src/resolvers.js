import { Concert } from "./model.js";

export const resolvers = {
    Query: {
        concert: async (_, { id }) => Concert.findByPk(id),
        concerts: async () => await Concert.findAll(),
    },
};