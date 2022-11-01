import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from '../sreens/HomeScreen'
import PatientScreen from '../sreens/PatientScreen'

const Stack=createNativeStackNavigator()

const styleHeader={
    headerTintColor:'#2a86ff',
    headerStyle:{
        elevation:0.8,
        shadowOpacity:0.8
    }
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{title:'Пациенты',
                    ...styleHeader
                }}/>
                <Stack.Screen name='Patient' component={PatientScreen} options={{title:'Карта пациента',
                    ...styleHeader
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation