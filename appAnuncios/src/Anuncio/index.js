import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

class Anuncio extends Component {
  render(){
    //let img = this.props.detalhes.image;
    let img = '../Imgs/padrao.png';
    return(      
      <View style={styles.container}>
          <Image 
            source={require(img)}
            style={styles.image}
          />
          <Text style={styles.title}>Título: {this.props.detalhes.titulo}</Text>
          <Text style={styles.descricao}>{this.props.detalhes.descricao}</Text>
      </View>
    );
  }
}

export default Anuncio;
