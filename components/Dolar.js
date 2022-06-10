import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Dolar(props) {
  return (
   <>
   <Text style={styles.text}> Venda: {props.data.ask}</Text>
   <Text style={styles.text}> Variação: {props.data.varBid}</Text>
   <Text style={styles.text}> Máximo: {props.data.high}</Text>
   <Text style={styles.text}> Mìnimo: {props.data.low}</Text>
   </>
  );
}

const styles = StyleSheet.create({
   text:{
       marginTop: 10,
       fontSize: 18,
   }
});