import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/queries";

/* ------------- Styles ------------- */
import { Container, ScrollView, Button, Text } from "./styles";

/* ------------- Private Components ------------- */
import Box from "./Box";

/* ------------- Components ------------- */
import Search from "../../components/Search";

/* ------------- Helpers ------------- */
//import { Bulbasaur, Charmander, Squirtle, Pikachu } from "../../helpers/Images";

export default function HomeScreen({ navigation }) {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  return (
    <Container>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading && <Text>Carregando...</Text>}
        {error && <Text>Error</Text>}
        {data &&
          data.pokemons.map(poke => (
            <Box
              type={poke.types[0]}
              number={poke.number}
              source={{ uri: poke.image }}
              name={poke.name}
            />
          ))}
        <Button>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  );
}
