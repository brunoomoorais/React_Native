import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
  }

  diminuir(){
    this.setState({
      pessoas: this.state.pessoas - 1
    });
  }

  render(){
    return(
      <View>
        <Text style={styles.centroPrincipal}>Contador de Pessoas</Text>
        <Text style={styles.contador}>{this.state.pessoas}</Text>

        {/* <ButtonEspecial title={'Aumentar'} func={this.aumentar}/>
        <ButtonEspecial title={'Diminuir'} func={this.diminuir}/> */}
        <ButtonPressable title={'Somar'} func={this.aumentar} color={'green'}/>
        <ButtonPressable title={'Subtrair'} func={this.diminuir} color={'red'}/>
      </View>
    )
  }
}

// class ButtonEspecial extends Component {
//   render(){
//     return(
//       <Button        
//         style={{width: 200,
//           height: 50,
//           margin: 20,
//           color: 'white',
//           backgroundColor: '#000'}} 
//         title={this.props.title}
//         onPress={this.props.func}
//       />
//     )
//   }
// }

class ButtonPressable extends Component {
  render(){
    return(
      <Pressable style={[styles.button, {backgroundColor:this.props.color}]} onPress={this.props.func}>
        <Text style={styles.text}>{this.props.title}</Text>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  centroPrincipal:{
    color: 'grey',
    margin: 30,
    fontSize: 20,
    textAlign: 'center'
  },
  contador:{
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderColor: '#000'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10,
    marginHorizontal: 50
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
