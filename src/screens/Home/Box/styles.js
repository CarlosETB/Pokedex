import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../../helpers/Colors'

export const Container = styled.View`
    margin: 5px;
    width: 150px;
    height: 150px;
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