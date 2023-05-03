import { gql } from "@apollo/client";


export const deleteconcert = gql`
mutation deleteconcert($deleteconcertId: ID!) {
  deleteconcert(id: $deleteconcertId) {
    success
    Errors {
      message
      path
    }
  }
}
`;
export const deleteshoppingcartitem = gql`
mutation deleteshoppingcartitem($deleteshoppingcartitemId: ID!) {
  deleteshoppingcartitem(id: $deleteshoppingcartitemId) {
    success
    Errors {
      message
      path
    }
  }
}
`;
export const addcartitem = gql`
mutation addcartitem($input: CartInput!) {
  addcartitem(input: $input) {
    success
    Errors {
      message
    }
  }
}
`;



