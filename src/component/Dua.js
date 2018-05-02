import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

class Dua extends Component { render(){
    return(
        <View style={{ flex:1, alignItems: 'center', 
        justifyContent: 'center'}}>

        <Text>Hal 2 </Text>
        <Button title='Ke hal 2 lagi'
        onPress={
            () => this.props.navigation.navigate('HalDua')
        }/>
        <Button title= 'Kembali'
        onPress={
            () => this.props.navigation.goBack()
        }/>
        </View>
    );
}}

export default Dua;