import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query {
    pokemons(first: 4) {
      name
      number
      types
      image
    }
  }
`;

