import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nUm: 0,
      nDois: 0,
      result: 0
    };


    this.mult = this.mult.bind(this);
  }

  mult(){
    this.setState({
      result: this.state.nUm * this.state.nDois
    })
  }

  render(){
    return(
      <View>
        <Text style={styles.centroPrincipal}>Multiplicador de números</Text>
        <Text style={styles.label}>Primeiro número: </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite o primeiro número'
          onChangeText={(text) => this.setState({nUm: text})}
        />

        <Text style={styles.label}>Segundo número: </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite o segundo número'
          onChangeText={(text) => this.setState({nDois: text})}
        />

        <Pressable style={styles.button} onPress={this.mult}>
          <Text style={styles.text}>Multiplicar</Text>
        </Pressable>
        {/* <Button
          title="Multiplicar" 
          onPress={this.mult}
        /> */}

        <Text style={styles.result}>Resultado: {this.state.result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centroPrincipal:{
    textAlign: 'center',
    color: 'grey',
    fontSize: 20,
    margin: 20
  },
  label:{
    textAlign: 'left',
    color: 'grey',
    fontSize: 15,    
    marginHorizontal: 30,
  },
  input:{
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


export default App