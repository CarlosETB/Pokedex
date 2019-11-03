import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flex: 1
    }
  }))`
  padding: 40px 30px;
  background: ${pokeColor.primary};
`

export const Close = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 40px;
  align-self: flex-end;
  justify-content: center;
`