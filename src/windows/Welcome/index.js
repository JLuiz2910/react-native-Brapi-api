import {React, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Welcome(){
    const navigation=useNavigation();
    return(
        
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.png')}
                style={{width: '100%'}}
                resizeMode='contain'/>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>
                Monitore, organize e gerencie suas finanças</Text>
                <Text style={styles.text}>Aperte em acessar para prosseguir</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Graph')} style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'

    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',

    }
})