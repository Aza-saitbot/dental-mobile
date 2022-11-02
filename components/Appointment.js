import { View } from 'react-native'
import styled from 'styled-components/native'
import GrayText from './GrayText'
import Badge from './Badge'

export default function Appointment({user,diagnosis,active,time,navigate}) {
    return (
        <GroupItem onPress={()=>navigate('Patient',{user})}>
            <Avatar source={{
                uri: user.image
            }}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <Badge active={active}>{time}</Badge>
        </GroupItem>
    )
}




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

