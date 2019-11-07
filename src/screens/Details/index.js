import React from 'react';

/* ------------- Native Components ------------- */
import { View } from 'react-native'

/* ------------- Styles ------------- */
import { Container, Top, Body, Bottom, Button, Close, Image, ViewImage } from './styles'

/* ------------- Helpers ------------- */
import { Charmander } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

import TabNavigator from '../../components/TabNavigator'
import About from './About'

export default function DetailsScreen ({ navigation, type }) {
    return (
      <Container>
        <Top>
          <Close onPress={() => navigation.goBack()}> 
            <Icon name='arrow-back' />
          </Close>
        </Top>
        <ViewImage>
          <Image 
            source={Charmander} 
            resizeMode="contain"/>
        </ViewImage>
        <Body>
          <View style={{flex: 1, width: '100%', marginTop: 80 }}>
            <About navigation={navigation} />
          </View>
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
