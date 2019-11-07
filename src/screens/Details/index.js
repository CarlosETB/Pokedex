import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_EVOLUTION } from '../../graphql/queries'

/* ------------- Helpers ------------- */
import { Charmander } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

/* ------------- Styles ------------- */
import { 
  Container, 
  Top, Body, 
  Bottom, 
  Button, 
  Close, 
  Image,
  ViewImage, 
  Tab, Title, 
  Namee, Number } from './styles'

export default function DetailsScreen ({ navigation, children, data }) {
  const [pokemon, setPokemon] = useState([])
    const { id, name, photo, type, number } = data
    const pokeEvolution = useQuery(GET_EVOLUTION, {
      variables: {
        pokemon_name: name
      }
    })

    useEffect(() => {
      pokeEvolution && setPokemon(pokeEvolution.data.pokemon.evolutions)
    }, [])

    let color = ''

  switch (type) {
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
      color = pokeColor.white;
  }

    return (
      <Container color={color}>
        <Top>
          <Close onPress={() => navigation.navigate('Home')}> 
            <Icon name='arrow-back' />
          </Close>
        </Top>

        <Title>
          <Namee>{name}</Namee>
          <Number># {number}</Number>
        </Title>

        <ViewImage color={color}>
          <Image source={{uri: photo }} resizeMode='contain'/>
        </ViewImage>
        <Body>
          <Tab>
            {children}
          </Tab>
          <Bottom>

            
                <Button>
                  <Image source={{ uri: photo }}  resizeMode="contain" />
                </Button>

                

                {pokemon.map(poke => (
                  <>
                    <Icon name='arrow-forward' color={pokeColor.gray} />

                    <Button>
                      <Image source={{ uri: poke.image }}  resizeMode="contain" />
                    </Button>
                  </>
                ))}
            
            
          </Bottom>
        </Body>
      </Container>
    )
}
