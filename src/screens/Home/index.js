import React from 'react';

/* ------------- Styles ------------- */
import { Container, ScrollView, View, Button, Text } from './styles'

import Search from '../../components/Search'

export default function HomeScreen ({ navigation }) {
  
  return (
    <Container>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false} >
   

        <Button>
          <Text>Carregar mais...</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}
