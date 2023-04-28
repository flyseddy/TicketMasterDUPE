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



