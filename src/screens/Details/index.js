import React from 'react';

/* ------------- Native Components ------------- */
import { View } from 'react-native'

/* ------------- Styles ------------- */
import { Container, Top, Body, Bottom, Button, Close, Image, ViewImage, Tab } from './styles'

/* ------------- Helpers ------------- */
import { Charmander } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

export default function DetailsScreen ({ navigation, type, children }) {
    return (
      <Container>
        <Top>
          <Close onPress={() => navigation.navigate('Home')}> 
            <Icon name='arrow-back' />
          </Close>
        </Top>
        <ViewImage>
          <Image 
            source={Charmander} 
            resizeMode="contain"/>
        </ViewImage>
        <Body>
          <Tab>
            {children}
          </Tab>
          <Bottom>
            <Button>
              <Image source={Charmander} resizeMode="contain" />
            </Button>
            
            <Icon name='arrow-forward' color={pokeColor.gray} />

            <Button>
              <Image source={Charmander} resizeMode="contain" />
            </Button>

            <Icon name='arrow-forward' color={pokeColor.gray} />

            <Button>
              <Image source={Charmander} resizeMode="contain" />
            </Button>
          </Bottom>
        </Body>
      </Container>
    )
}
