import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here

  type Query {
    concerts: [Concert]
    concert(id:ID!): Concert!
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
  }

  type Mutation {
    deleteconcert(id: ID!): BaseResponse
  }
  
`;

