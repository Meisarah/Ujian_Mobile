import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component {
  state = {
    massa: 0,
    tinggi: 0,
    hasil: null
  }

  massa = 0
  tinggi = 0

  hitungIMT(massa, tinggi) {
    let imt = massa / Math.pow(tinggi, 2)
    let ket = ''
    switch (true) {
      case (imt < 18.5) : ket = 'Berat badan kurang'; break;
      case (imt < 24.9) : ket = 'Berat badan ideal'; break;
      case (imt < 29.9) : ket = 'Berat badan berlebih'; break;
      case (imt < 39.9) : ket = 'Berat badan sangat berlebih'; break;
      default : ket = 'Obesitas';
    }
    return { imt, ket }
  }

  render() {
    return (
      <View style={{ height:'100%', backgroundColor: '#AED8E6' }}>
        <View style={{ height: 50, backgroundColor: 'blue' }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
            ...marginAuto
          }}>INDEKS MASSA TUBUH</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
          <TextInput style={{ flex: 1 }} onChangeText={(input) => this.massa = input } placeholder='Massa (kg)'/>
          <TextInput style={{ flex: 1 }} onChangeText={(input) => this.tinggi = input / 100 } placeholder='Tinggi (cm)'/>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Button 
            onPress={() => {
              this.setState({
                massa: this.massa,
                tinggi: this.tinggi, 
                hasil: this.hitungIMT(this.massa, this.tinggi) 
              })
              console.log(this.massa, this.tinggi)
            }} 
            color='blue' title='Hitung IMT'/>
        </View>
        {
          this.state.hasil ? 
            <View style={{ paddingVertical: 10, alignItems: 'center' }}>
              <View style={ wrapperContent }>            
                <Text style={ contentColor }>Massa Tubuh:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.massa } kg</Text>
              </View>
              <View style={ wrapperContent }>                
                <Text style={ contentColor }>Tinggi Badan:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.tinggi } m</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Indeks Massa Tubuh:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.hasil.imt }</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Diagnosa:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.hasil.ket }</Text>
              </View>
            </View>
          : null
        }
      </View>
    );
  }
}

let wrapperContent = {
  padding: 10, 
  alignItems: 'center'
}

let contentColor = {
  color: 'black'
}

let content = {
  fontSize: 20,
  fontWeight: 'bold'
}

let marginAuto = {
  marginRight: 'auto', 
  marginLeft: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto'
}