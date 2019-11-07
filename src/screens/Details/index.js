import React from 'react'

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
  Name, Number } from './styles'

export default function DetailsScreen ({ navigation, type, children }) {
    return (
      <Container>
        <Top>
          <Close onPress={() => navigation.navigate('Home')}> 
            <Icon name='arrow-back' />
          </Close>
        </Top>

        <Title>
          <Name>Charmander</Name>
          <Number># 001</Number>
        </Title>

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
