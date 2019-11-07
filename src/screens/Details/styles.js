import styled from 'styled-components/native'

/* ------------- Helpers ------------- */
import { pokeColor } from '../../helpers/Colors'

export const Container = styled.View`
    flex: 1; 
    background-color: ${props => props.color};
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
    background-color: ${pokeColor.white};
    border: 2px solid ${props => props.color};
`

export const Image = styled.Image`
    width: 90%;
    height: 90%;
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
`

export const Bottom = styled.View`
    width: 100%; 
    height: 100px;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    align-self: flex-end;
    justify-content: space-evenly; 
`

export const Tab = styled.View`
    flex: 1; 
    width: 90%;
    margin-top: 80;
    align-self: center;
`

export const Title = styled.View`
    width: 80%;
    margin: 10px;
    align-self: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Namee = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: 600;
`

export const Number = styled.Text`
    color: white;
    font-size: 20px;
`
