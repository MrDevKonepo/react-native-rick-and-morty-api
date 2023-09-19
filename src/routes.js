import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import User from './pages/user';
import Main from './pages/main';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: 'LOGIN',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        //backgorundColor:'#3498db',
                    },
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        color: '#bbb'
                    }
                }}/>
                <Stack.Screen name="user" component={User} options={{
                    title: 'Cadastrar Usuário',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        //backgorundColor:'#3498db',
                    },
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        color: '#bbb'
                    }
                }}/>
                <Stack.Screen name="main" component={Main} options={{
                    title: 'Buscar Personagem',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        //backgorundColor:'#3498db',
                    },
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        color: '#bbb'
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}