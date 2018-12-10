import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: null
    }

    this.geraNumeroAleatorio = this.geraNumeroAleatorio.bind(this)
  }

  componentWillMount() {
    this.geraNumeroAleatorio()
  }

  geraNumeroAleatorio() {
    const randomIndex = Math.floor(Math.random() * 5)
    const sentences = [
      'Frase 1',
      'Frase 2',
      'Frase 3',
      'Frase 4',
      'Frase 5'
    ]

    this.setState({
      sentence: sentences[randomIndex]
    })
  }

  render() {
    const { sentence } = this.state

    return (
      <View style={styles.view}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Meu primeiro app</Text>
          <Button title="Gerar número aleatório" onPress={this.geraNumeroAleatorio} style={styles.button} />
        </ScrollView>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>{this.state.sentence}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  view: {
    flex: 1,
    backgroundColor: '#ffee58'
  },
  scrollView: {
    padding: 16
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    
  },
  footerText: {
    fontSize: 20
  },
  title: {
    marginBottom: 14,
    fontSize: 28
  },
  button: {
    color: '#fff'
  }
}