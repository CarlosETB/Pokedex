import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.View`
  width: 80%;
  padding: 0 15px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  align-self: center;
  color: ${pokeColor.gray}
`

