import React from 'react';

/* ------------- Styles ------------- */
import { Container, Image, Text, Bottom, Type } from './styles'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../../helpers/Colors'


export default function Box ({ navigation, type, number, source, color }) {
    
    switch (type) {
        case 'Grass': color = pokeColor.grass; break;
        case 'Fire': color = pokeColor.fire; break;
        case 'Water': color = pokeColor.water; break;
        case 'Eletric': color = pokeColor.eletric; break;
        case 'Poison': color = pokeColor.poison; break;
        case 'Bug': color = pokeColor.bug; break;
        case 'Normal': color = pokeColor.normal; break;
        case 'Fairy': color = pokeColor.fairy; break;
        case 'Fighting': color = pokeColor.fighting; break;
        case 'Psychic': color = pokeColor.psychic; break;
        case 'Rock': color = pokeColor.rock; break;
        case 'Steel': color = pokeColor.steel; break;
        case 'Ice': color = pokeColor.ice; break;
        case 'Ghost': color = pokeColor.ghost; break;
        case 'Ground': color = pokeColor.ground; break;
        case 'Flying': color = pokeColor.flying; break;
        case 'Dark': color = pokeColor.dark; break;
        case 'Dragon': color = pokeColor.dragon; break;
        default: console.log('Invalid Type')
    }

    return (
        <>
            {number &&
                <Container color='red'>
                    <Text>Nº {number}</Text>
                    <Image 
                        source={source} 
                        resizeMode="contain"/>
                    <Bottom>
                        <Type color={color}>{type}</Type>
                    </Bottom>
                </Container>
            }
        </>
    )
}
