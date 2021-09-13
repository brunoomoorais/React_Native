import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Vaga from './src/Vaga';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: [
        {
          id: 0,
          titulo: 'Desenvolvedor front-end',
          salario: '1.200',
          descricao: 'Trabalhar com C# .NETCORE e ASP.net',
          contato: 'empresa@gmail.com'
        },
        {
          id: 1,
          titulo: 'Desenvolvedor Back-end',
          salario: '1.200',
          descricao: 'Trabalhar com C# .NETCORE e ASP.net',
          contato: 'empresa@gmail.com'
        },
        {
          id: 2,
          titulo: 'Desenvolvedor SQLServer',
          salario: '1.200',
          descricao: 'Trabalhar com C# .NETCORE e ASP.net',
          contato: 'empresa@gmail.com'
        },
        {
          id: 3,
          titulo: 'Infra',
          salario: '1.200',
          descricao: 'Trabalhar com C# .NETCORE e ASP.net',
          contato: 'empresa@gmail.com'
        }
      ],
    }
  }
  render(){
    return(
      <View>
        <Text style={styles.title}>Vagas</Text>
        <FlatList
          data={this.state.vagas}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Vaga detalhes={item}/>}
        />
      </View>            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'grey',
    textAlign: 'center',
    margin: 40,
    fontSize:25
  }
});

export default App;