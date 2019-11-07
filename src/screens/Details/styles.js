import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.View`
    flex: 1; 
    background-color: ${pokeColor.fire};
`

export const Close = styled.TouchableOpacity`
    width: 30px;
`

export const Top = styled.View`
    width: 100%;
    margin: 30px 0 0 20px;
`

export const Body = styled.View`
    flex: 1;
    background-color: white; 
    justify-content: flex-end;
`

export const ViewImage = styled.View`
    z-index: 1;
    width: 150px;
    height: 150px;
    padding: 10px;
    align-self: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom:  -75px;
    justify-content: center;
    border: 2px solid ${pokeColor.fire};
    background-color: ${pokeColor.white};
`

export const Image = styled.Image`
    flex: 1;
    align-self: center;
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
`

export const Bottom = styled.View`
    width: 100%; 
    height: 100;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    align-self: flex-end; 
`

export const Tab = styled.View`
    flex: 1; 
    width: 90%;
    margin-top: 80;
    align-self: center;
`