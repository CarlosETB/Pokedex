import React from 'react';

/* ------------- Native Components ------------- */
import { View } from 'react-native'

/* ------------- Styles ------------- */
import { Container, Top, Bottom, Button, Close, Image, ViewImage } from './styles'

/* ------------- Helpers ------------- */
import { Charmander } from '../../helpers/Images'
import { pokeColor } from '../../helpers/Colors'
import { Icon } from '../../helpers/Icons'

export default function DetailsScreen ({ navigation, type }) {
    return (
      <Container>
        <Top>
          <Close>
            <Icon name='arrow-back' />
          </Close>
        </Top>
        <ViewImage>
          <Image 
            source={Charmander} 
            resizeMode="contain"/>
        </ViewImage>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: "flex-end"}}>

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
        </View>
      </Container>
    )
}
