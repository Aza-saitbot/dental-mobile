import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import SectionList from 'react-native/Libraries/Lists/SectionList'
import { Appointment, SectionTitle } from '../components'
import styled from 'styled-components/native'

const data = [
    {
        active: true, diagnosis: 'лечение зубов, легкий кариес',
        time: '11:30', user:{
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dwayne_Johnson_2014%28Cropped%29.jpg',
            fullname: 'Дуэйн Джонсон',
        }
    },
    {
        active: false, diagnosis: 'удаление зубов',
        time: '14:30', user:{
            image: 'https://s2.vcdn.biz/static/f/2326760021/image.jpg',
            fullname: 'Джеки Чан',
        }
    },
]

const DATA = [
    {title: '30 октября', data},
    {title: '1 ноября', data},
    {title: '1 ноября', data},
    {title: '1 ноября', data},
    {title: '1 ноября', data},
    {title: '1 ноября', data},
]

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({item}) =>
                        <Appointment navigate={navigation.navigate} {...item} />}
                renderSectionHeader={({section: {title}}) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
            <PlusButton style={{
                shadowColor: "#2a86ff",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.7,
                shadowRadius: 3.5,
                elevation: 4,
            }}>
                <AntDesign name="plus" size={36} color="white" />
            </PlusButton>
        </Container>
    )
}

const PlusButton=styled.TouchableOpacity`
align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
`

const Container = styled.View`
  flex: 1;
  background-color: white;
`

export default HomeScreen