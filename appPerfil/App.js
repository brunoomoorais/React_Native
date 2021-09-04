import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component{
  render(){
    let avatar = "https://avatars.githubusercontent.com/u/74513343?v=4";

    return(      
      <View>
        <Text style={{margin: 15, textAlign: 'center', fontSize: 30}}>Bruno Morais</Text>
        <Image 
          source={{ uri: avatar}}
          style={{width: 300, height: 300}}        
        />
        <Text style={{textAlign: 'left', fontSize: 15, color: '#cacaca'}}>Avatar do github</Text>
        <Text style={{textAlign: 'left', fontSize:20, margin: 10}}>Dados Pessoais: </Text>
        <Text style={{textAlign: 'left', marginLeft: 15}}>Nome: Bruno Sampaio de Morais</Text>
        <Text style={{textAlign: 'left', marginLeft: 15}}>Idade: 20 anos</Text>
        <Text style={{textAlign: 'left', marginLeft: 15}}>Cidade: São Vicente</Text>
        <Text style={{textAlign: 'left', marginLeft: 15}}>Curso: Sistemas para Internet</Text>                                      
        <Text style={{textAlign: 'left', fontSize:20, margin: 10}}>Formação: </Text>
        <Text style={{textAlign: 'left', marginLeft: 15}}>Nível superior incompleto</Text>          
      </View>
    )
  }
}

export default App;
