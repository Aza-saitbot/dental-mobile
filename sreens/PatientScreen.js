import React from 'react'
import styled from 'styled-components/native'
import GrayText from '../components/GrayText'

const PatientScreen = () => {

    return (
        <Container>
            <PatientFullName>Азамат Саитбаталов</PatientFullName>
            <GrayText>+7(999)-888-44-22</GrayText>
        </Container>
    )
}

const PatientFullName = styled.Text`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 5px;
`

const Container = styled.View`
  padding: 25px;
`


export default PatientScreen