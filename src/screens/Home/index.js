/* ------------- Native Component ------------- */
import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

import Search from '../../components/Search'

export default function HomeScreen ({ navigation }) {
  
  return (
    <Container>
      <Search />     
    </Container>
  )
}
