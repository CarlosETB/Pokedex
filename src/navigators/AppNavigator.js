import React from 'react'

/* ------------- Native Components ------------- */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

/* ------------- Screens ------------- */
import HomeScreen from '../screens/Home'

import Header from '../components/Header'
import Drawer from '../components/Drawer'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: <Header /> }
  }
},
{
  initialRouteName: 'Home'
})

const Switch = createSwitchNavigator({
    App: createDrawerNavigator({ AppNavigator }, {
      contentComponent: Drawer
    }) 
})

export default createAppContainer(Switch)
