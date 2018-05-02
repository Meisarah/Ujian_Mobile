import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { Header, Title, Body,Left,Right, Content, Card, Container } from 'native-base';

 

export default class App extends Component {
    state = {
      count: 0,
      diagnosa:''
    }
  
    temp = 0;
    tinggi = 0;
    
  
    add(jumlah) {
      this.setState({ count: this.state.count + jumlah })
    }
  
  diagnosa() {
      if(this.state.count <18.5){
         return<Text style={{color:'#000',fontSize:25}}>BB Anda kurang!</Text>;
      }
      else if(this.state.count >=18.5 || this.state.count <=24.9){
        return<Text style={{color:'#000',fontSize:25}}>BB Anda ideal!</Text>;
      }
      else if(this.state.count >=25.0 || this.state.count <=29.9){
        return<Text style={{color:'#000',fontSize:25}}>BB Anda berlebih!</Text>;
      }
      else if(this.state.count >=30.0 || this.state.count <=39.9){
        return<Text style={{color:'#000',fontSize:25}}>BB Anda sangat berlebih!</Text>;
      }
      else if(this.state.count > 39.9){
        return<Text style={{color:'#000',fontSize:25}}>BB Anda obesitas!</Text>;
          }
        }

render() {

      return (
        <View>
          <Header>
            <Title>INDEX MASA TUBUH</Title>
            </Header>
         
          
          <Text>Massa (kg)</Text>
          <TextInput keyboardType='numeric' onChangeText={input => this.temp = parseInt(input)} />
         
          <Text>Tinggi (cm)</Text>
          <TextInput keyboardType='numeric' onChangeText={input => this.tinggi = parseInt(input)} />
         
          <Button title="HITUNG IMT" onPress={() => this.add(parseInt(this.temp)/((Math.pow(this.tinggi,2)/10000))) }/>
          
          <Body>
            <Text style={{color:'#000'}}>Massa Tubuh:</Text>
            <Text style={{color:'#000',fontSize:25}}>{this.temp} kg</Text>
            <Text style={{color:'#000'}}>Tinggi Badan:</Text>
            <Text style={{color:'#000',fontSize:25}}>{this.tinggi/100} m</Text>
            <Text style={{color:'#000'}}>Indeks Masa Tubuh:</Text>
            <Text style={{color:'#000',fontSize:25}}>{ this.state.count }</Text>
            <Text style={{color:'#000'}}>Diagnosa:</Text>
            {this.diagnosa()}
          </Body>
        </View>
      );
    }
  }
