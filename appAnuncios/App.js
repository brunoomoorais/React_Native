import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Anuncio from './src/Anuncio'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios: [
        {
          id: 0,
          img: './img/padrao.png',
          titulo: 'Backend',
          descricao: 'Procura-se programador Back-end'
        },
        {
          id: 1,
          img: './img/padrao.png',
          titulo: 'Backend',
          descricao: 'Procura-se programador Back-end'
        },
        {
          id: 2,
          img: './img/padrao.png',
          titulo: 'Panela',
          descricao: 'Vende-se panela por 100 reais'
        },
        {
          id: 3,
          img: './img/padrao.png',
          titulo: 'Frontend',
          descricao: 'Procura-se programador front'
        }
      ],
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Anúncios</Text>
        <FlatList
          data={this.state.anuncios}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Anuncio detalhes={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    margin: 40
  }
});

export default App;
