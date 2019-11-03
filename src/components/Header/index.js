import React from 'react'

/* ------------- Styles ------------- */
import { Container, Text, Button } from './styles'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

import { withNavigation } from 'react-navigation'

const Header = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={navigation.toggleDrawer}>
        <Icon name='menu' />
      </Button>
      
      <Text>Pokedex</Text>

      <Button>
        <Icon name='settings' />
      </Button>
    </Container>
  )
}

export default withNavigation(Header)