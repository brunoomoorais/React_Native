import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// function App(){
//   return(
//     <View>
//       <Text>Olá Turma</Text>
//     </View>
//   )
// }

class App extends Component{
  render(){
    return(
      <View style={{backgroundColor: '#fff'}}>
        <Text style={{color: '#000', marginTop: 30}}>Olá Turma</Text>
        <Text style={{color: '#000'}}>Meu primeiro app</Text>
        <FotoAvatar largura={150} altura={150}/>
        <FotoAvatar largura={150} altura={150}/>
        <Text>Bla bla bla</Text>
      </View>
    )
  }
}

class FotoAvatar extends Component {  
  render(){
    let img = "https://avatars.githubusercontent.com/u/74513343?v=4";
    return(
      <View>
        <Text style={{color: '#000', textAlign: 'center', fontSize: 30, margin: 30}}>Nome da Foto</Text>
        <Image 
          source={{ uri: img}}
          style={{ width: this.props.largura, height: this.props.altura}}
        />
      </View>
    )
  }
}


export default App;