import React from 'react'

/* ------------- Native Components ------------- */
import { Platform } from 'react-native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

/* ------------- Icons ------------- */
import Ionicons from 'react-native-vector-icons/Ionicons'

export function Icon ({ name, color, size, ...props }) {
  return (
    <Ionicons
      size={size || 35}
      color={color || pokeColor.white}
      name={`${Platform.select({
        ios: `ios-${name}`,
        android: `md-${name}`
    })}`}
      {...props}
    />
  )
}
