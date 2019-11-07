import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query GET_POKEMONS($pokemons_number: Int!) {
    pokemons(first: $pokemons_number) {
      id
      name
      number
      types
      image
    }
  }
`;

export const GET_POKEMON = gql`
  query GET_POKEMON($pokemon_name: String!){
    pokemon(name: $pokemon_name) {
      id
      name
      number
      types
      image
    }
  }
`
export const GET_EVOLUTION = gql`
  query GET_EVOLUTION($pokemon_name: String!){
    pokemon(name: $pokemon_name) {
      evolutions {
        image
      }
    }
  }
`
