import React from 'react'
import { TouchableOpacity } from 'react-native'

/* ------------- Styles ------------- */
import { Container, Input } from './styles'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

export default function Search ({ value, onChangeText, onPress }) {
  return (
    <Container>
        <Input placeholder='Pesquisar' value={value} onChangeText={onChangeText} />
        <TouchableOpacity onPress={onPress}>
          <Icon name='search' size={30} color='gray'/>
        </TouchableOpacity>
    </Container>
  )
}