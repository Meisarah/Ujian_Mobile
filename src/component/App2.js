import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text,
Button, Icon, Left, Body, Right, Header, Item, Input } from 'native-base';

import axios from 'axios';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


class App extends Component {

render(){
  return(
    <View style = {styles.container}>
      <MapView
      style={styles.map}
      region={{
        latitude: -6.302403,
        longitude : 106.652248,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}>
        </MapView>
      </View>
  )
}
}


  // state={
  //   team: []
  // };

  // componentDidMount(){
  //   var url='https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal';
  //   axios.get(url).then((xx)=> {
  //      this.setState({
  //             team: xx.data.player,
  //             // team: xx.data.player[0].strPlayer,
  //             // team1: xx.data.player[1].strPlayer
  //           })
  //         });
  // };


  // render(){
  //   // return(
  //   // <View>
  //   //   <Text>{this.state.team}</Text>
  //   //   <Text>{this.state.team1}</Text>
  //   // </View>

  //   const data = this.state.team.map((item,index)=>
  // {
  //   var pemain = [item.strPlayer];
  //   return <Text
  //    key={index}>{pemain}</Text>;
  // })

  //   return(
  //     <View>
  //       {data}
  //       </View>
//     );

//   }
// }



//     return <Container key={index}>
//         <Content>
//       <Card style={{flex: 0}}>

//         <CardItem>
//           <Left>
//             <Thumbnail source={require('./gbr/bts.jpg')}/>
//             <Body>
//               <Text>{pemain}</Text>
//               <Text note>Mei, 13 2018</Text>
//             </Body>
//           </Left>
//         </CardItem>

//         {/* <CardItem>
//           <Body>
//             <Text>BTS</Text>
//             <Image source={require('./gbr/1.jpg')}
//             style={{height: 200, width: 370, flex:1}}/>
//           </Body>
//         </CardItem> */}

//         {/* <CardItem>
//           <Left>
//             <Button transparent>
//             <Icon name="thumbs-up"/>
//             <Text>123.000 Likes</Text>
//             </Button>
//           </Left>
//           <Body>
//             <Button transparent>
//             <Icon active name="chatbubbles"/>
//             <Text>4 Komentar</Text>
//             </Button>
//           </Body>
//           <Right>
//             <Button transparent>
//             <Icon active name="share"/>
//             <Text>Bagikan</Text>
//             </Button>
//           </Right>
        
//         </CardItem> */}

//       </Card>
//     </Content>
//   </Container>

//   }
// )


// return(
// <View>
//   {data}
//   <Header searchBar rounded>
//               <Item>
//                 <Icon name="search"/>
//                 <Input placeholder="Cari"/>
//               </Item>
//   </Header>
// </View>

// )
// }
// }

export default App;