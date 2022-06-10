import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
  const [dolar, setDolar] = useState("");

  async function buscarDolar(){
    const response = await Api.get('json/last/USD-BRL');
    setDolar(response.data.USDBRL);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.txtBotao}> Cotação de Moedas</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={buscarDolar}
        > 
          <Text style={styles.txtBotao}> Dólar - Real</Text>
        </TouchableOpacity>

        <Dolar data={dolar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

bloco:{
    width: '100%',
    alignItems:'center',
  },

text: {
    fontSize:20,
  },

botao:{
  width: '50%',
  height: 34,
  marginTop:18,
  backgroundColor:'#FDDDDE',
  borderRadius: 10,
},

txtBotao:{
  fontSize:20,
  textAlign:'center',
}

});