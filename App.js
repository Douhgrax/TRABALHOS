import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require("./assets/vina.png")} />
    <Text style={{fontSize: 35}}>O melhor dogão de Conkas</Text>
    <Button value="Exibir Alert" style={styles.container} onPress={() => {
    alert('Praça do IF - Todos os dias - 24hrs');
  }}  title= "Aonde comprar?"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
