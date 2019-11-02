import React from 'react'

/* ------------- Styles ------------- */
import { Container, Text, Button } from './style'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

export default function Header ({ navigation }) {
  return (
    <Container>
      <Button>
        <Icon name='menu' />
      </Button>
      
      <Text>Pokedex</Text>

      <Button>
        <Icon name='person' />
      </Button>
    </Container>
  )
}