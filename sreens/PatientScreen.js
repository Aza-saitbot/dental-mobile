import React from 'react'
import styled from 'styled-components/native'
import { Foundation, Ionicons } from '@expo/vector-icons'
import GrayText from '../components/GrayText'
import { Badge, Button } from '../components'
import { Text, View } from 'react-native'

const PatientScreen = ({route}) => {

    const {fullname, phone} = route.params.user

    return (
        <View style={{flex: 1}}>
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
                        <Button color="#84D269">
                            <Foundation name="telephone" size={22} color="white"/>
                        </Button>
                    </PhoneButtonView>
                </PatientButtons>
            </PatientDetails>

            <PatientAppointments>
                <Container>
                    <AppointmentCard style={{
                        shadowOpacity: 0.4,
                        shadowColor: 'gray',
                        shadowRadius: 10,
                        elevation: 0.5,
                    }}>
                        <AppointmentCardRow>
                            <Ionicons name="md-medical" size={16} color="#АЗАЗАЗ"/>
                            <AppointmentCardLabel>
                                Зуб: <Text style={{fontWeight: '600'}}>:пульпит</Text>
                            </AppointmentCardLabel>
                        </AppointmentCardRow>
                        <AppointmentCardRow>
                            <Foundation name="clipboard-notes" size={16} color="#АЗАЗАЗ"/>
                            <AppointmentCardLabel>
                                Диагноз: <Text style={{fontWeight: '600'}}>:пульпит</Text>
                            </AppointmentCardLabel>
                        </AppointmentCardRow>
                        <AppointmentCardRow style={{justifyContent:'space-between'}}>
                            <Badge active style={{width:155}}>
                                11.10.2019 - 15:40
                            </Badge>
                            <Badge color="green">
                                1500 Р
                            </Badge>
                        </AppointmentCardRow>
                    </AppointmentCard>
                </Container>
            </PatientAppointments>
        </View>
    )
}

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`

const AppointmentCard = styled.View`
  
  padding: 20px 25px;
  background: white;
`

const Container = styled.View`
  padding: 25px;
  flex: 1;
`

const PatientDetails = styled(Container)`
  flex: 0.3
`
const PatientAppointments = styled.View`
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