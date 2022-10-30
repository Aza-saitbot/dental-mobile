import { View } from 'react-native'
import styled from 'styled-components/native'

export default function Group({title, items}) {
    return (
        <GroupBlock>
            <GroupTitle>{title}</GroupTitle>
            {items.map(item =>
                <GroupItem key={item.id}>
                    <Avatar source={{
                        uri: item.image
                    }}/>
                    <View style={{flex: 1}}>
                        <FullName>{item.fullname}</FullName>
                        <GrayText>{item.diagnosis}</GrayText>
                    </View>
                    <GroupDate active={item.active}>{item.date}</GroupDate>
                </GroupItem>
            )}
        </GroupBlock>
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

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
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
  padding: 20px 0;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
`

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: black;
`
const GroupBlock = styled.View`
  padding: 0 20px;
  margin-bottom: 25px;
`

