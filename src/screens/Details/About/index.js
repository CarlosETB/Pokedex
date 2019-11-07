import React, { useState, useEffect } from 'react'

/* ------------- Styles ------------- */
import { Background } from './styles.js'

/* ------------- Components ------------- */
import TabNavigator from '../../../components/TabNavigator'
import DetailsScreen from '../../Details/index'

export default function About ({ navigation }) {
  return (
    <DetailsScreen navigation={navigation}>
      <Background>
        <TabNavigator navigation={navigation} active='About' />
      </Background>
    </DetailsScreen>
  )
}
