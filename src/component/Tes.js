import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import Satu from './Satu';
import Dua from './Dua';


const RootStack = StackNavigator(
  {
    HalSatu: {screen: Satu},
    HalDua: {screen: Dua}
  },
  {
    initialRouteName: 'HalSatu',
  }
);

class Tes extends Component{
  render(){
    return(<RootStack />)
  }
}

export default Tes;