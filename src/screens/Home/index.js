import React from 'react';

/* ------------- Styles ------------- */
import { Container, ScrollView, Button, Text } from './styles'

/* ------------- Private Components ------------- */
import Box from './Box'

/* ------------- Components ------------- */
import Search from '../../components/Search'

/* ------------- Helpers ------------- */
import { Bulbasaur, Charmander, Pikachu, Squirtle } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'

export default function HomeScreen ({ navigation }) {
  
  return (
    <Container>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Box
          number='001' 
          source={Bulbasaur} 
          color={pokeColor.grass}/> 
        <Box 
          number='004'
          source={Charmander} 
          color={pokeColor.fire} />
        <Box 
          number='007'
          source={Squirtle}
          color={pokeColor.water} />
        <Box 
          number='025'
          source={Pikachu} 
          color={pokeColor.eletric} />
          
        
        <Button>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}
