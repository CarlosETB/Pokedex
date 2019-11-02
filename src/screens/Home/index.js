/* ------------- Native Component ------------- */
import React from 'react'
import { View, Text } from 'react-native'


export default function HomeScreen ({ navigation }) {
  
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{ alignSelf: 'center', fontSize: 20 }}>Pokedéx</Text>      
    </View>
  )
}
