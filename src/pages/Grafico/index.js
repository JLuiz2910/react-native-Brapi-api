import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, Grid } from 'react-native-chart-kit';

const BarChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return null; // Não renderize nada se os dados estiverem vazios ou indisponíveis
  }

  const labels = data.map((item) => item.date);
  const values = data.map((item) => parseFloat(item.value)).reverse();

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(128, 0, 200, ${opacity})`,
    fromZero: false,
    decimalPlaces: 0,
  };

  return (
    <View>
      <View style={styles.container2}>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={460}
        height={300}
        chartConfig={chartConfig}
      />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  text:{
    color: '#38a69d',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
},
  container2:{
    marginLeft: -50,
    backgroundColor: '#fff',
  }
})

export default BarChartComponent;
