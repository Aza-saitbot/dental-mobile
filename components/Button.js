import React from 'react'
import styled from 'styled-components/native'

const Button = ({children,color}) => {
    return (
        <ButtonWrapper color={color}>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonWrapper>
    )
}

const ButtonWrapper=styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${props => props.color ? props.color : '#2A86FF'};
  height: 45px;
`

const ButtonText=styled.Text`
color: white;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`

export default Button