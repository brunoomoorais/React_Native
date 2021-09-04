import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
// import DefaultImage from '../img/img.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gasolina: null,
      alcool: null,
      resultado: ''
    };

    this.result = this.result.bind(this);
  }

  result(){
    let gasolina = this.state.gasolina;
    let alcool = this.state.alcool;
    let message = '';

    if(gasolina == null || alcool == null)
      message = 'Digite todos os valores';
    else
    {
      let calc = alcool/gasolina;
      message = calc > 0.7 ? 'O melhor é gasolina' : 'O melhor é alcool';
    }    

    this.setState({
      resultado: message
    })
  }

  render(){
    let url = "./img/img.png";
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          ALcool ou gasolina
        </Text>
        <Image 
          source={require(url)}
          style={styles.image}
        />
        <Text style={styles.label}>Digite o valor do alcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({alcool: text})}}
        />
        <Text style={styles.label}>Digite o valor da gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({gasolina: text})}}
        />
        <Pressable style={styles.button} onPress={this.result}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>        
        <Text style={styles.result}>{this.state.resultado}</Text>
      </View>
    )
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
    textAlign: 'center',
    color: 'grey',
    fontSize: 20,
    margin: 20
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
