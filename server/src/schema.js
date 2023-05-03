import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here

  type Query {
    concerts: [Concert]
    concert(id:ID!): Concert!
    shoppingCart: [ShoppingCartItem]
    shoppingCartItem(id:ID!): ShoppingCartItem!
  }

  type Error {
    message:String
    path:String
  }

  type BaseResponse {
    success:String
    Errors:[Error]
   }

  type Concert {
    id: ID!
    name: String!
    venue:String!
    artists: String!
    date: String!
    location: String!
    photo: String!
    price: Float!
  }

  type ShoppingCartItem {
    id: ID!
    name: String!
    venue:String!
    artists: String!
    date: String!
    location: String!
    photo: String!
    price: Float!
  }

  input CartInput {
    id: ID!
    name: String!
    venue:String!
    artists: String!
    date: String!
    location: String!
    photo: String!
    price: Float!
  }

  type Mutation {
    addcartitem(input: CartInput!): BaseResponse
    deleteconcert(id: ID!): BaseResponse
    deleteshoppingcartitem(id:ID!): BaseResponse
  }
  
`;

