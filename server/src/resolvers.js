import { Concert } from "./model.js";
import { ShoppingCartItem } from "./model.js";

export const resolvers = {
    Query: {
        concert: async (_, { id }) => Concert.findByPk(id),
        concerts: async () => await Concert.findAll(),
        // Shopping Cart Queries
        shoppingCartItem: async(_, { id }) => ShoppingCartItem.findByPk(id),
        shoppingCart: async() => await ShoppingCartItem.findAll()
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
      },
      deleteshoppingcartitem: async (_, { id }) => {
        const record = await ShoppingCartItem.findByPk(id);
        if (!record) {
          throw new Error(`Record with id ${id} was not found.`);
        }
        await record.destroy();
        return {
          success: true,
        };
      },
      addcartitem: async (_, { input }) => {
          await ShoppingCartItem.create({
              ...input,
              complete: false,
          });
          return {
              success: true,
              Errors:null
          };
      },
    }
};