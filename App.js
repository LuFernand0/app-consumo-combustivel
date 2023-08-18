import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';



export default function App() {

    const [km, setKm] = useState('');
    const [combustivel, setCombustivel] = useState('');

  function CalculoCombustivel(){
    const resultado = km / combustivel;
    
    if(resultado && combustivel != 0){
    alert(`O consumo por litro do seu carro é ${resultado ?? 0}`);
    }else{
      alert("preencha os dois campos");
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Consumo de Combustivel
      </Text>
      <TextInput
      style={styles.input}
        placeholder='Digite os Km percorridos: '
        keyboardType='numeric'
        placeholderTextColor='#FFF'
        onChangeText={(km) => setKm(km)}
      />

      <TextInput
      style={styles.input}
        placeholder='Digite a quantidade de combustivel: '
        keyboardType='numeric'
        placeholderTextColor='#FFF'
        onChangeText={(combustivel) => setCombustivel(combustivel)}
      />
      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
        <Text style={styles.textBtn}> Calcular o Consumo</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#ecf01',
    padding: 8
  },
  paragraph:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn:{
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    marginTop: 50
  },
  textBtn:{
    fontSize: 30,
    color: '#FFF'
  },
  input:{
    fontSize: 15,
    padding: 20,
    backgroundColor: '#a0c225',
    borderRadius: 10,
    margin: 15,
    color: '#FFF',
  }
});