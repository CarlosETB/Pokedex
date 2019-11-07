import styled from 'styled-components'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Navigator = styled.View`
  width: 100%;
  height: 50;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const NavigatorItem = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 2;
  border-bottom-color: ${props => props.active ? pokeColor.primary : pokeColor.white};
`

export const NavigatorText = styled.Text`
  font-size: 18;
  margin-bottom: 5;
  text-align: center;
  color: ${pokeColor.black};
`
