import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0,
      valor: 0,
      de: 'Real',
      des: [
        'Real', 'Dolar', 'Euro'
      ],
      para: 'Real',
      paras: [
        'Real', 'Dolar', 'Euro'
      ],
    }
    this.result = this.result.bind(this);
  }

  result(){
    let de = this.state.de;
    let para = this.state.para;
    let valor = parseInt(this.state.valor);
    let result = '';
    switch(true) {
      case de == 'Real' && para == 'Euro':
        result = valor * 0.16;
        break;
      case de == 'Real' && para == 'Dolar':
        result = valor * 0.19;
        break;
      case de == 'Dolar' && para == 'Real':
        result = valor * 5.25;
        break;
      case de == 'Dolar' && para == 'Euro':
        result = valor * 0.85;
        break;
      case de == 'Euro' && para == 'Dolar':
        result = valor * 1.18;
        break;
      case de == 'Euro' && para == 'Real':
        result = valor * 6.20;
        break;
      default:
        result = 'Selecione moedas diferentes';
        break;
    }

    this.setState({
      resultado: result
    })
  }

  render(){
    let deItems = this.state.des.map((chave) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    });
    let paraItems = this.state.paras.map((chave) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    });
    return(
      <View>
        <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>
        <Text style={styles.label}>Valor:</Text>
        <TextInput style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({valor: text}); }}    
        />
        <Text style={styles.label}>De:</Text>
        <Picker style={styles.input}
          onValueChange={(chave) => this.setState({de: chave})}
        >
          {deItems}
        </Picker>

        <Text style={styles.label}>Para:</Text>
        <Picker style={styles.input}
          onValueChange={(chave) => this.setState({para: chave})}
        >
          {paraItems}
        </Picker>

        <Pressable style={styles.button} onPress={this.result}>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>

        <Text style={styles.result}>Resultado: {this.state.resultado}</Text>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    color: 'grey',
    fontSize: 25,
    margin: 20
  },
  label:{
    textAlign: 'left',
    color: 'grey',
    fontSize: 15,    
    marginHorizontal: 30,
  },
  input:{
    width: 300,
    margin: 20,
    marginHorizontal: 30,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5
  }, 
  result:{
    textAlign: 'left',
    color: 'grey',
    fontSize: 20,
    marginHorizontal: 30
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,    
    backgroundColor: '#1E90FF',
    marginHorizontal:30,
    marginVertical: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  space:{
    marginBottom: 80
  }
});

export default App;