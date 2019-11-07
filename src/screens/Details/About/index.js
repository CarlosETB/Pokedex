import React, { useState, useEffect } from 'react'

/* ------------- Styles ------------- */
import { Background } from './styles.js'

/* ------------- Components ------------- */
import TabNavigator from '../../../components/TabNavigator'


export default function About ({ navigation }) {
  return (
    <Background>
      <TabNavigator navigation={navigation} active='About' />
    </Background>
  )
}
