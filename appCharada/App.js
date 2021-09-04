import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomico: null
    }

    this.random = this.random.bind(this);
  }

  random(){
    this.setState({randomico: Math.floor(Math.random() * 10)})    
  }

  render(){
    let img = './img/img.jpg';
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Descubra o número</Text>
        <Image 
          source={require(img)}
          style={styles.image}
        />
        <Text style={styles.label}>Pense em um número de 0 a 10</Text>
        <Text style={styles.result}>{this.state.randomico}</Text>
        <Pressable style={styles.button} onPress={this.random}>
          <Text style={styles.text}>Randomizar</Text>
        </Pressable>
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
    width:300,
    height:100,
    alignSelf: 'center'
  },
  label:{
    textAlign: 'left',
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
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
    fontSize: 30,
    margin: 20,
    width: 100,
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,    
    backgroundColor: 'red',
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