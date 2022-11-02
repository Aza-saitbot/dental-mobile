import React from 'react'
import styled from 'styled-components/native'
import { Foundation } from '@expo/vector-icons';
import GrayText from '../components/GrayText'
import { Button } from '../components'
import { View } from 'react-native'

const PatientScreen = ({route}) => {
    
    const {fullname,phone}=route.params.user

    return (
       <View style={{flex:1}}>
           <PatientDetails>
               <PatientFullName>{fullname}</PatientFullName>
               <GrayText>{phone}</GrayText>
               <PatientButtons>
                   <FormulaButtonView>
                       <Button>
                           Формула зубов
                       </Button>
                   </FormulaButtonView>
                   <PhoneButtonView>
                       <Button color='#84D269'>
                           <Foundation name="telephone" size={22} color="white" />
                       </Button>
                   </PhoneButtonView>
               </PatientButtons>
           </PatientDetails>

           <PatientAppointments></PatientAppointments>
       </View>
    )
}

const Container = styled.View`
  padding: 25px;
  flex: 1;
`

const PatientDetails=styled(Container)`
flex: 0.3
`
const PatientAppointments=styled.View`
flex: 1;
  background: #F8FAFD;
`
const FormulaButtonView = styled.View`
  flex: 1;
`

const PhoneButtonView = styled.View`
  width: 45px;
  margin-left: 10px;
`

const PatientButtons = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
`

const PatientFullName = styled.Text`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 5px;
`




export default PatientScreen