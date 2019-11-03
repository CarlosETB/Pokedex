import React from 'react';

/* ------------- Styles ------------- */
import { Container, ScrollView, Button, Text } from './styles'

/* ------------- Private Components ------------- */
import Box from './Box'

/* ------------- Components ------------- */
import Search from '../../components/Search'

/* ------------- Helpers ------------- */
import { Bulbasaur,  Charmander, Squirtle, Pikachu } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'

export default function HomeScreen ({ navigation }) {
  
  return (
    <Container>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Box 
          type='Grass'
          number='001' 
          name='Bulbasaur'
          source={Bulbasaur} /> 
        <Box 
          type='Fire'
          number='004'
          name='Charmander'  
          source={Charmander}/>
        <Box 
          type='Water' 
          number='007'
          name='Squirtle'
          source={Squirtle}/>
        <Box 
          number='025' 
          type='Eletric'
          name='Pikachu' 
          source={Pikachu} />
        <Button>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}
