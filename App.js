import React from 'react'

/* ------------- Native Components ------------- */
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

/* ------------- Apollo ------------- */
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

/* ------------- Navigation ------------- */
import AppNavigator from './src/navigators/AppNavigator'

const cache = new InMemoryCache()
const link = new HttpLink({ uri: 'https://graphql-pokemon.now.sh/' })
const client = new ApolloClient({ cache, link })

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
      <SafeAreaView style={styles.SafeAreaView}>
        <ApolloProvider client={client}>
          <AppNavigator />
        </ApolloProvider>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1
  }
})

export default App
