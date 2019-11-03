import React from 'react';

/* ------------- Styles ------------- */
import { Container, Image, Text } from './styles'

export default function Box ({ navigation, number, source, color }) {
    return (
        <>
            {number &&
                <Container color={color}>
                    <Text>Nº {number}</Text>
                    <Image 
                        source={source} 
                        resizeMode="contain"/>
                </Container>
            }
        </>
    )
}
