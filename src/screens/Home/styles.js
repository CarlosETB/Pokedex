import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.View`
    flex: 1; 
    align-items: center;
    padding: 10px 10px;
`

export const ScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexGrow: 1,
        flexWrap: 'wrap', 
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
  }))` 
    width: 100%;
    margin: 10px 0;
    padding: 0px 10px;
`

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    margin: 15px 0;
    align-items: center;
    border-radius: 10px;
    align-self: flex-end;
    justify-content: center;
    border: 1px solid ${pokeColor.blue};
`

export const Text = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${pokeColor.blue};
`