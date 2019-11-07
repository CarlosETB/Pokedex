import React, { useState, useEffect } from 'react'

/* ------------- Styles ------------- */
import { Background } from './styles.js'

/* ------------- Components ------------- */
import TabNavigator from '../../../components/TabNavigator'
import DetailsScreen from '../../Details/index'

import { pokeColor } from '../../../helpers/Colors'
export default function About ({ navigation }) {

  let color = ''

  switch (navigation.getParam('type', '')) {
    case "Grass":
      color = pokeColor.grass;
      break;
    case "Fire":
      color = pokeColor.fire;
      break;
    case "Water":
      color = pokeColor.water;
      break;
    case "Electric":
      color = pokeColor.electric;
      break;
    case "Poison":
      color = pokeColor.poison;
      break;
    case "Bug":
      color = pokeColor.bug;
      break;
    case "Normal":
      color = pokeColor.normal;
      break;
    case "Fairy":
      color = pokeColor.fairy;
      break;
    case "Fighting":
      color = pokeColor.fighting;
      break;
    case "Psychic":
      color = pokeColor.psychic;
      break;
    case "Rock":
      color = pokeColor.rock;
      break;
    case "Steel":
      color = pokeColor.steel;
      break;
    case "Ice":
      color = pokeColor.ice;
      break;
    case "Ghost":
      color = pokeColor.ghost;
      break;
    case "Ground":
      color = pokeColor.ground;
      break;
    case "Flying":
      color = pokeColor.flying;
      break;
    case "Dark":
      color = pokeColor.dark;
      break;
    case "Dragon":
      color = pokeColor.dragon;
      break;
    default:
      console.log("Invalid Type");
  }

  let pokeData = {
    id: navigation.getParam('id', ''),
    name: navigation.getParam('name', ''),
    photo: navigation.getParam('photo', ''),
    type: navigation.getParam('type', ''),
    number: navigation.getParam('number', '')
  }

  return (
    <DetailsScreen navigation={navigation} data={pokeData}>
      <Background>
        <TabNavigator navigation={navigation} active='About' />
      </Background>
    </DetailsScreen>
  )
}
