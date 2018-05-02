import React, { Component } from 'react'
// import { StackNavigator } from 'react-navigation';
// import Satu from './src/component/Satu';
// import Dua from './src/component/Dua';


import { TabNavigator } from 'react-navigation';
import Tiga from './src/component/Tiga';
import Empat from './src/component/Empat';
// import Tes from '.src/component/Tes';

// import { DrawerNavigator } from 'react-navigation';
// import Lima from './src/component/Lima';
// import Enam from './src/component/Enam';

// import { View } from 'react-native';
// import * as Animatable from 'react-native-animatable';


// class App extends Component{
//   render(){
//     return(
//       <View>
//         <Animatable.Text
//         animation="rubberBand" delay={3000} duration={1000}
//         direction="normal" easing="ease-in"
//         iterationCount="infinite"
//         style={{
//           fontSize: 50,
//           textAlign: 'center',
//         }}>
//         I L U
//         </Animatable.Text>
//         </View>
//     )
//   }
// }

// export default App;

// // ================DRAWERNAVIGATOR
// export default DrawerNavigator({
//   LIMA : {screen: Lima},
//   ENAM : {screen: Enam}
// });



// ==============TAB NAVIGATOR

export default TabNavigator({
  TIGA : {screen: Tiga},
  EMPAT: { screen: Empat},
},
{

  tabBarPosition: 'bottom',
  tabBarOptions:
  {
    style:
    {
      backgroundColor: '#000'
    }
  }
}
);


// ==================STACK NAVIGATOR
// const RootStack = StackNavigator(
//   {
//     HalSatu: {screen: Satu},
//     HalDua: {screen: Dua}
//   },
//   {
//     initialRouteName: 'HalSatu',
//   }
// );

// class App extends Component{
//   render(){
//     return(<RootStack />)
//   }
// }

// export default App;















// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput
// } from 'react-native';
// // import Header from "./src/component/Header";
// import {Icon} from 'react-native-elements';
// import {SocialIcon} from 'react-native-elements';
// import {Avatar} from 'react-native-elements';
// import {FormInput} from 'react-native-elements';
// import {Header} from 'react-native-elements';
// import {SearchBar} from 'react-native-elements';


// // import {Icon} from 'react-native-vector-icons/FontAwesome';



// class App extends Component {
//   render() { 
//   return (
//    <View>
// <Header
//    leftComponent={{
//      icon:'menu', color:'#fff' }}
//    centerComponent={{ 
//      text:'Instagram', style: {color:'#fff'} }}
//    rightComponent={{
//      icon:'home', color:'#fff' }}
//  />
// <SearchBar
//     lightTheme
//     round
//     showLoadingIcon
//     onChangeText={()=>{}}
//     onClear={()=>{}}
//     placeholder='Cari apa hayo?'/>


//    <FormInput placeholder='Input biasa' /> 
//    <FormInput placeholder='Input efek shake' shake={true} />

//    <Icon name='g-translate' color='#00aced' />
//    <Icon name='android' color='#2DE688' reverse />
//    <Icon name='verified-user' color='blue' raised />
//    <Icon reverse name='sc-telegram' type='evilicon' color='#517fa4' />
//    <Icon raised name='heartbeat' type='font-awesome' color='#f50' onPress={() => {}} />
//    <SocialIcon type='facebook'/>
//    <SocialIcon light type='instagram'/>
//    <SocialIcon raised={false} type='linkedin'/>
//    <SocialIcon light raised={false} type='twitter'/>

//    <Avatar
//     xlarge  //small medium large
//     rounded
//     source={require('./gbr/bts.jpg')}
//     onPress={() => {}}
//     activeOpacity={0.7}
//     />
//    </View>
//   );}}

  
// export default App;



// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' +
// //     'Cmd+D or shake for dev menu',
// //   android: 'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });

// // export default class App extends Component {
// //   state = {
// //     count: 0
// //   }

// //   temp = 0;

// //   add(jumlah) {
// //     this.setState({ count: this.state.count + jumlah })
// //   }

// //   sub(jumlah) {
// //     this.setState({ count: this.state.count - jumlah })
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Count</Text>
// //         <Text style={styles.welcome}>
// //           { this.state.count }
// //         </Text>
// //         <TextInput keyboardType='numeric' onChangeText={input => this.temp = parseInt(input)} />
// //         <Button title="+" onPress={() => this.add(parseInt(this.temp)) }/>
// //         <Button title="-" onPress={() => this.sub(parseInt(this.temp)) }/>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });


// // const App = () => 
// // {
// //   return (
// //     <View>
// //       <Header headerText={'Albums'}/>
// //     </View>
// //   );
// // };
