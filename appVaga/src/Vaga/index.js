import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { styles } from './styles';

class Vaga extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{this.props.detalhes.titulo}</Text>
                <Text style={styles.info}>Salário: R$ {this.props.detalhes.salario}</Text>
                <Text style={styles.info}>Descrição: {this.props.detalhes.descricao}</Text>
                <Text style={styles.info}>Contato: {this.props.detalhes.contato}</Text>
            </View>
        )
    }
}

export default Vaga;