import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Switch, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      escolaridade: 0,
      limite: 0,
      brasileiro: false,    
      _nome: '',
      _idade: '',
      _sexo: '',
      _escolaridade: '',
      _limite: 0,
      _brasileiro: false,
      sexo: 'Masculino',
      sexos: ['Masculino', 'Feminino', 'Outros'],
      escolaridade: 'Fundamental incompleto',
      escolaridades: ['Fundamental incompleto', 'Fundamental completo', 'Medio completo', 'Superior completo']
    }

    this.confirmar = this.confirmar.bind(this);
  }  

  confirmar(){
    this.setState({
      _nome: this.state.nome,
      _idade: this.state.idade,
      _sexo: this.state.sexo,
      _escolaridade: this.state.escolaridade,
      _limite: 'R$ ' + this.state.limite,
      _brasileiro: this.state.brasileiro ? "Sim" : "Não"
    })
  }

  render(){
    let sexoItems = this.state.sexos.map((chave) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    });
    let escolaridadeItems = this.state.escolaridades.map((chave) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    });
    return(
      <View>        
        <Text style={styles.title}>Abertura de conta</Text>
        <ScrollView>
          <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput 
              style={styles.input}
              onChangeText={(text) => {this.setState({nome: text});}}
            />

            <Text style={styles.label}>Idade:</Text>
            <TextInput 
              keyboardType={'numeric'}
              style={styles.input}
              onChangeText={(text) => {this.setState({idade: text});}}
            />

            <Text style={styles.label}>Sexo:</Text>
            <Picker style={styles.input}
              onValueChange={(chave) => this.setState({sexo: chave})}
            >
              {sexoItems}
            </Picker>

            <Text style={styles.label}>Escolaridade:</Text>
            <Picker style={styles.input}
              onValueChange={(chave) => this.setState({escolaridade: chave})}
            >
              {escolaridadeItems}
            </Picker>

            <Text style={styles.label}>Limite: {this.state.limite}</Text>
            <Slider
              minimumValue={0}
              maximumValue={10000}
              onValueChange={ (value) => this.setState({limite: value})}
              value={this.state.limite}
              step={1}
              style={{marginHorizontal: 20}}
            />

            <Text style={styles.label}>Brasileiro?</Text>
            <Text style={{marginHorizontal: 20}}> {(this.state.brasileiro) ? "Sim" : "Não"}</Text>
            <Switch 
              value={this.state.brasileiro}
              onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}
            />          

            <Pressable style={styles.button} onPress={this.confirmar}>
              <Text style={styles.text}>Confirmar</Text>
            </Pressable>

            <Text style={styles.title}>Dados informados:</Text>
            <Text style={styles.result}>Nome: {this.state._nome}</Text>
            <Text style={styles.result}>Idade: {this.state.idade}</Text>
            <Text style={styles.result}>Sexo: {this.state._sexo}</Text>
            <Text style={styles.result}>Escolaridade: {this.state._escolaridade}</Text>
            <Text style={styles.result}>Limite: {this.state._limite}</Text>
            <Text style={styles.result}>Brasileiro: {this.state._brasileiro}</Text>
            <Text style={styles.space}></Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    color: 'grey',
    fontSize: 25,
    margin: 20
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
    marginHorizontal:30,
    marginVertical: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  space:{
    marginBottom: 80
  }
});

export default App;