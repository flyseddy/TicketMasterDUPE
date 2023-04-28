import { Concert } from "./model.js";

export const resolvers = {
    Query: {
        concert: async (_, { id }) => Concert.findByPk(id),
        concerts: async () => await Concert.findAll(),
    },

    Mutation: {
        deleteconcert: async (_, { id }) => {
        const record = await Concert.findByPk(id);
        if (!record) {
          throw new Error(`Record with id ${id} was not found.`);
        }
        await record.destroy();
        return {
          success: true,
        };

    }
}
};