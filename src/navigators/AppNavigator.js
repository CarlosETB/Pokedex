import React from 'react'

/* ------------- Native Components ------------- */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

/* ------------- Screens ------------- */
import HomeScreen from '../screens/Home'
import DetailsScreen from '../screens/Details'

/* ------------- TabNavigator ------------- */
import About from '../screens/Details/About'
import Infos from '../screens/Details/Infos'
import Stats from '../screens/Details/Stats'

/* ------------- Components ------------- */
import Header from '../components/Header'
import Drawer from '../components/Drawer'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: <Header /> }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  },
  About: {
    screen: About,
    navigationOptions: { header: null }
  },
  Infos: {
    screen: Infos,
    navigationOptions: { header: null }
  },
  Stats: {
    screen: Stats,
    navigationOptions: { header: null }
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
