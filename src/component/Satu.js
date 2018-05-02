import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

class Satu extends Component { render(){
    return(
        <View style={{ flex:1, alignItems: 'center', 
        justifyContent: 'center'}}>

        <Text>Hal 1 </Text>
        <Button title='Ke hal 2'
        onPress={
            () => this.props.navigation.navigate('HalDua')
        }/>

        </View>
    );
}}

export default Satu;