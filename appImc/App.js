import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      altura: null,
      peso: null,
      calc: '',
      resultado: ''
    }

    this.calc = this.calc.bind(this);
  }

  calc()
  {
    let altura = this.state.altura;
    let peso = this.state.peso;
    let message = '';

    if(altura == null || peso == null)
      message = 'Digite todos os valores';
    else{
      let calc = peso/(altura * altura);
      switch(true) {
        case (calc <= 18.5):
          message = 'Abaixo do peso';
          break;
        case (calc > 18.5 && calc <= 24.9):
          message = 'Peso normal';
          break;
        case calc > 24.9 && calc <= 29.9:
          message = 'Sobrepeso';
          break;
        case calc > 29.9 && calc <= 34.9:
          message = 'Obesidade Grau I';
          break;
        case calc > 34.9 && calc <= 39.9:
          message = 'Obesidade Grau II';
          break;
        default: 
          message = 'Obesidade Grau III ou Mórbida';
          break;        
      }

      this.setState({calc: 'Resultado do IMC: ' + calc.toPrecision(4)});
    }

    this.setState({
      resultado: message,      
    });
  }

  render(){
    let img = './img/imc.png';    
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Calculo de IMC
        </Text>
        <Image 
          source={require(img)}
          style={styles.image}
        />
        <Text style={styles.label}>Digite sua altura</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({altura: text})}}
        />
        <Text style={styles.label}>Digite seu peso</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({peso: text})}}
        />
        <Pressable style={styles.button} onPress={this.calc}>
          <Text style={styles.text}>Calcular</Text>
        </Pressable>
        <Text style={styles.result}>{this.state.calc}</Text>
        <Text style={styles.result}>{this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20
  },
  image: {
    width:200,
    height:200,
    alignSelf: 'center'
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
    marginHorizontal:30
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default App;
