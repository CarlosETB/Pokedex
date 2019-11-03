import React from 'react'

/* ------------- Styles ------------- */
import { Container, Close } from './styles'

/* ------------- Helpers ------------- */
import { Icon } from '../../helpers/Icons'


export default function Drawer ({ navigation }) {
    return ( 
        <Container>
            <Close onPress={navigation.toggleDrawer} >
                <Icon name='close'></Icon>
            </Close>
        </Container>
    )
}

