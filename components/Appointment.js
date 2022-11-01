import { View } from 'react-native'
import styled from 'styled-components/native'
import GrayText from './GrayText'

export default function Appointment({user,diagnosis,active,time,navigate}) {
    return (
        <GroupItem onPress={()=>navigate('Patient')}>
            <Avatar source={{
                uri: user.image
            }}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    )
}


const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#e9f5ff'};
  color: ${props => props.active ? '#FFF' : '#4294ff'};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  text-align: center;
  line-height: 28px;
`

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
`

