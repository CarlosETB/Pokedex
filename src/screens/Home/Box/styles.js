import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../../helpers/Colors'

export const Container = styled.TouchableOpacity`
    margin: 5px;
    width: 150px;
    padding: 25px 0;
    height: 200px;
    border-radius: 10px;
    justify-content: center;
    border: 3px solid ${props => props.color};
`

export const Image = styled.Image`
    width: auto;
    height: 80%;
`

export const Text = styled.Text`
    font-size: 15px;
    padding: 0 15px;
    color: ${pokeColor.gray};
`

export const Title = styled.Text`
    color: gray;
    font-size: 18px;
    padding: 0 15px;
`

export const Type = styled.Text`
    padding: 0 5px;
    font-size: 15px;
    margin: 0 5px;
    border-radius: 5px;
    color: ${pokeColor.white};
    background-color: ${props => props.color};
`

export const Bottom = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`