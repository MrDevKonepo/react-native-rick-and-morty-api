import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const User = () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const handleUser = () => {
        navigation.navigate('login')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={text => setNome(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Telefone'
                value={telefone}
                onChangeText={text => setTelefone(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='CPF'
                value={cpf}
                onChangeText={text => setCpf(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Curso'
                value={curso}
                onChangeText={text => setCurso(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleUser}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical:10,
        width: '80%',
    },
    button:{
        backgroundColor: '#3498db',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        margin: 6
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default User;