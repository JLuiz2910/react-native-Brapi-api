import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import BarChartComponent from '../Grafico';

// URL base da BRAPI
const BASE_URL = 'https://brapi.dev/api/v2';

const BrapiComponent = () => {
  const [startDate, setStartDate] = useState('20/09/2023');
  const [endDate, setEndDate] = useState('25/09/2023');
  const [chartData, setChartData] = useState([]); // Estado para armazenar os dados do gráfico

  const fetchData = async () => {
    try {
      // Endpoint e parâmetros da solicitação da Prime Rate
      const endpoint = 'prime-rate';
      const params = {
        country: 'brazil',
        historical: false,
        start: startDate,
        end: endDate,
        sortBy: 'date',
        sortOrder: 'desc',
      };

      // Construa a URL completa com base nos parâmetros
      const url = `${BASE_URL}/${endpoint}?${new URLSearchParams(params).toString()}`;

      // Faça a solicitação GET para a URL da BRAPI
      const response = await axios.get(url);

      // Exiba os dados no console
      console.log('Dados da BRAPI:', response.data);

      // Processar os dados para obter o maior valor de cada ano
      const rawData = response.data['prime-rate'];
      const yearlyData = {};

      for (const item of rawData) {
        const dateParts = item.date.split('/');
        const year = dateParts[2];
        const value = parseFloat(item.value);

        // Se já tivermos um valor para este ano, compare e mantenha o maior
        if (yearlyData[year] === undefined || value > yearlyData[year]) {
          yearlyData[year] = value;
        }
      }

      // Converter os dados anuais de volta para um array
      const yearlyChartData = Object.keys(yearlyData).map((year) => ({
        date: year,
        value: yearlyData[year],
      }));

      // Atualize o estado com os dados processados
      setChartData(yearlyChartData);
    } catch (error) {
      console.error('Erro ao buscar dados da BRAPI:', error);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Registro da inflação no Brasil</Text>
      </View>
      <View style={styles.graf}>
        <BarChartComponent data={chartData} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Informe a data inicial e a final</Text>
        <TextInput style={styles.text}
          placeholder="Data de início (DD/MM/AAAA)"
          value={startDate}
          onChangeText={(text) => setStartDate(text)}
        />
        <TextInput style={styles.text}
          placeholder="Data de término (DD/MM/AAAA)"
          value={endDate}
          onChangeText={(text) => setEndDate(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => fetchData()}>
          <Text style={styles.textb}>Buscar</Text>
        </TouchableOpacity>
        
        {/* Renderize o componente de gráfico e passe os dados como propriedade */}
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  text:{
    color: '#38a69d',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginTop:10,
},
title:{
  color: '#38a69d',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 25,
  fontWeight: 'bold',
  marginTop: 20,

},

textb:{
  color: '#fff',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
},
  container2:{
    marginTop: 10,
    backgroundColor: '#fff',

  },
  button:{
    
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    marginTop: 150,
   
  },
  graf:{
    marginTop:2,
  }
})

export default BrapiComponent;
