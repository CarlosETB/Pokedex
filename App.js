import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'


import AppNavigator from './src/navigators/AppNavigator'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.SafeAreaView}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1
  }
})

export default App;
