import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS, GET_POKEMON } from "../../graphql/queries";

/* ------------- Styles ------------- */
import { Container, ScrollView, Button, Text } from "./styles";

/* ------------- Private Components ------------- */
import Box from "./Box";

/* ------------- Components ------------- */
import Search from "../../components/Search";

export default function HomeScreen({ navigation }) {
  const [numberPokemons, setNumberPokemons] = useState(4);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [searchErrors, setSearchErrors] = useState(false);
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      pokemons_number: numberPokemons
    }
  });

  const pokeSearch = useQuery(GET_POKEMON, {
    variables: {
      pokemon_name: search
    }
  });

  useEffect(() => data && setPokemons(data.pokemons))

  function searchPokemons() {
    if (search.length === 0) return setPokemons(data.pokemons);
    if (pokeSearch.error) return setSearchErrors(true);
    if (pokeSearch.data) return setPokemons([pokeSearch.data.pokemon]);
  }

  return (
    <Container>
      <Search
        value={search}
        onChangeText={text => setSearch(text)}
        onPress={() => searchPokemons()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading && <Text>Carregando...</Text>}
        {error && <Text>Error</Text>}
        {searchErrors && <Text>Sua pesquisa esta muito erradinha</Text>}
        {pokemons &&
          pokemons.map(poke => (
            <Box
              key={poke.id}
              type={poke.types[0]}
              number={poke.number}
              source={{ uri: poke.image }}
              name={poke.name}
            />
          ))}
        <Button onPress={() => setNumberPokemons(numberPokemons + 4)}>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  );
}
