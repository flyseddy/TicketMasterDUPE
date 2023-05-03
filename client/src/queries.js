import { gql } from "@apollo/client";

export const GET_CONCERTS = gql`
query Concerts {
  concerts {
    id
    name
    venue
    location
    date
    photo
    artists
    price
  }
}`
export const GET_CONCERT = gql`
query Concert($concertId: ID!) {
  concert(id: $concertId) {
    id
    name
    venue
    location
    date
    photo
    artists
    price
  }
}`
export const GET_SHOPPING_CART = gql`
query ShoppingCart {
  shoppingCart {
    id
    name
    venue
    location
    date
    photo
    artists
    price
  }
}`