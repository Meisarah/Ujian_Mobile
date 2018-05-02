import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
<<<<<<< HEAD
  Image,
  AppState,
  ScrollView, Button
} from 'react-native';

import { 
  Container, 
  Header,  
  Icon, 
  Left, 
  Right, 
  Body, 
  Title,
  Card,
  CardItem, Item, Input, Thumbnail, Content
} from 'native-base';

import axios from 'axios';

export default class App extends Component {

    constructor(){
      super()
      this.state = {data: [], form: ''}
    }
  
    // get = () => {
    //   var url = 'https://developers.zomato.com/api/v2.1/search?q=ayam'
    //   axios.get(url)
    //   .then((ambilData) => {
    //     console.log(ambilData.data);
    //     this.setState({
    //       data: ambilData.data.restaurants.restaurant
    //     })
    //   })
    // }
    get = () => {
    var url = `https://developers.zomato.com/api/v2.1/search?q=${this.state.form}`;
    var config = {
      headers:{'user-key':'7a12146738a2f8c88662fdc9c837b605'}
    };

    axios.get(url, config).then((ambilData)=>{
      this.setState({
        data: ambilData.data.restaurants,
      })
    })
  }
  
    render(){
  
      const datafinal = this.state.data.map((item, index) => {
        var nama = item.restaurant.name;
        var kota = item.restaurant.location.city;
        var alamat = item.restaurant.location.address;
        var harga = item.restaurant.average_cost_for_two;
        var gambar = item.restaurant.thumb;
        
        var g = this.state.showDefault? require('./a.jpg') : {gambar};
 
        return <Card key={index} style={{flex:0}}>

        <CardItem><Left>
        <Thumbnail source={gambar}/></Left>
        <Body><Text style={{color:'#000'}}>{nama}</Text><Text note>{kota}</Text></Body>
        <Right><Text style={{color:'#000'}}>Rp.{harga},-</Text></Right>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={g}
              onLoadStart={() => this.setState({showDefault: true})}  
              onLoad={() => this.setState({showDefault: false})}
            style={{height:200, width:370, flex:1}}/>
            </Body>
          </CardItem>
        <CardItem>
        <Body style={{flex:1}}><Text style={{color:'#000'}}>{alamat}</Text></Body>
        </CardItem>
        </Card> 
        
      })
  
      return(
        <Container>
          <Header searchBar rounded>
          <Item><Icon name='search'/>
            <Input placeholder= 'Cari produk'
                  onChangeText={(x)=> {this.setState({form: x})}}
                  value={this.state.form}/>
            
            </Item></Header>
            <Content>
            <Button title="LIHAT DAFTAR RESTO" onPress={()=>{this.get()}}/>
            <ScrollView>
              {datafinal}
            </ScrollView>
            </Content>
          </Container>
      )
=======
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
>>>>>>> 3ac4a1eebe91b64f7d66d95cc20dee540faec6c1
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
<<<<<<< HEAD
   
=======
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
>>>>>>> 3ac4a1eebe91b64f7d66d95cc20dee540faec6c1
