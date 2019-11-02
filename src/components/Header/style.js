import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.View.attrs(() => ({
    elevation: 15,
    shadowOpacity: 1,
    shadowColor: pokeColor.black,
    shadowOffset: { width: 0, height: 6 }
  }))`
  width: 100%;
  height: 90px;
  padding: 0px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${pokeColor.primary};
`

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 100;
  align-self: center;
  color: ${pokeColor.white};
`

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

