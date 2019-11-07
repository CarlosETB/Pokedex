import React from 'react'

/* ------------- Styles ------------- */
import { Navigator, NavigatorItem, NavigatorText } from './styles.js'

export default function TabNavigator ({ navigation, active }) {
  const pages = [
    { id: 0, title: 'Sobre', nav: 'About' },
    { id: 1, title: 'Status', nav: 'Stats' },
    { id: 2, title: 'Informações', nav: 'Infos' }
  ]

  return (
    <Navigator>
      {pages.map(page => {
        return page.nav === active ? (
          <NavigatorItem key={page.id} active onPress={() => navigation.navigate(page.nav)}>
            <NavigatorText>{page.title}</NavigatorText>
          </NavigatorItem>
        ) : (
          <NavigatorItem key={page.id} onPress={() => navigation.navigate(page.nav)}>
            <NavigatorText>{page.title}</NavigatorText>
          </NavigatorItem>
        )
      })}
    </Navigator>
  )
}
