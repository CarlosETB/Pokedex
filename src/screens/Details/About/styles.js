import styled from 'styled-components/native'

export const Background = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))`
  width: 100%;
  height: 100%;
  background-color: red;
`
