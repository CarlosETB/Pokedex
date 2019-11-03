import React from 'react'

/* ------------- Styles ------------- */
import { Container, Input } from './styles'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

export default function Search () {
  return (
    <Container>
        <Input placeholder='Pesquisar'/>
        <Icon name='search' size={30} color='gray'/>
    </Container>
  )
}