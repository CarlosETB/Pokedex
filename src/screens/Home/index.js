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
          type='Grass'
          number='001' 
          source={Bulbasaur}/> 
        <Box 
          type='Fire'
          number='004'
          source={Charmander}  />
        <Box 
          type='Water' 
          number='007'
          source={Squirtle}/>
        <Box 
          number='025' 
          type='Eletric'
          source={Pikachu} />
        <Button>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}
