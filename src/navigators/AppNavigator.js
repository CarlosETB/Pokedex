/* ------------- Native Components ------------- */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

/* ------------- Screens ------------- */
import HomeScreen from '../screens/Home'

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  }
},
{
  initialRouteName: 'Home'
})

const Switch = createSwitchNavigator({
    HomeStack: HomeStackNavigator
})

export default createAppContainer(Switch)
