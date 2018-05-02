import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
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
    }
  }
   
