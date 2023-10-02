import {React, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import BarChartComponent from '../../pages/Grafico';
import BrapiComponent from '../../pages/Api';

export default function Graph(){
    const navigation=useNavigation();
    return(
        
        <View style={styles.container}>
            <View>
                <BarChartComponent/>
            </View>
            <View style={styles.containerForm}>
                <BrapiComponent/>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'

    },
    container2:{
        flex: 1,

    },
    container3:{
        flex: 2,

    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    
})