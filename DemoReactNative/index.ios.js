// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
import './src/InitialComponent';
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   Alert,
//   TouchableHighlight,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableNativeFeedback,
//   ScrollView,
//   FlatList,
//   SectionList,
//   Platform
// } from 'react-native';
//
// const myConst = 3.14;
//
// export default class DemoReactNative extends React.Component {
//   static navigationOptions = {
//     title: 'Chat with Lucy',
//   };
//
//   constructor(props) {
//     debugger;
//     super(props);
//     this.state = {showText: true};
//     setInterval(() => {
//     //debugger;
//     //   this.setState(
//     //
//     //   //   => {
//     //   //   debugger;
//     //   //   return { showText: !preState.showText };
//     //   // }
//     // );
//     }, 1000);
//   }
//
//   componentWillMount() {
//     //debugger;
//   }
//
//   componentDidMount() {
//     //debugger;
//   }
//
//   updateState = () => {
//     debugger;
//     this.setState({showText: false})
//   }
//
//   tapOnButton() {
//     Alert.alert('tap on Button')
//   }
//
//   longPress() {
//     Alert.alert('long Press on Button')
//   }
//
//   render() {
//     //debugger;
//     let pic = {
//         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//       };
//
//       let display = null;
//       if (this.state.showText) {
//         display = 'Aaditya';
//       } else {
//         display = '';
//       }
//
//       console.log('Aaditya')
//   return (
//
//       //<ScrollView bounces = {true} indicatorStyle = {'default'}>
//       <View style={styles.container}>
//       {
//       // <Text>{display} {myConst}</Text>
//       // <Greeting />
//       // <Greeting />
//       // <PresentationComponent test='Aaidtya' test1='Shyam' updateState = {this.updateState} />
//       //
//       // <TouchableHighlight onPress = {this.tapOnButton} underlayColor = "white">
//       // <View style={styles.buttonHeader}>
//       //   <Text style={styles.buttonText}>
//       //     Ohh!! Thank you Aadi for using React Native!
//       //     </Text>
//       // </View>
//       // </TouchableHighlight>
//       //
//       // <TouchableOpacity onPress={this.tapOnButton} onLongPress = {this.longPress}>
//       //     <View style={styles.button}>
//       //       <Text style={styles.buttonText}>TouchableOpacity</Text>
//       //     </View>
//       //   </TouchableOpacity>
//       //
//       //   <TouchableNativeFeedback onPress = {this.tapOnButton} underlayColor = "white">
//       //   <View style={styles.buttonHeader}>
//       //     <Text style={styles.buttonText}>
//       //       Ohh!! Thank you Aadi for using React Native!
//       //       </Text>
//       //   </View>
//       //   </TouchableNativeFeedback>
//       //
//       //   <TouchableWithoutFeedback onPress={this.tapOnButton} onLongPress = {this.longPress}>
//       //       <View style={styles.button}>
//       //         <Text style={styles.buttonText}>TouchableOpacity</Text>
//       //       </View>
//       //     </TouchableWithoutFeedback>
//       //
//       //   <Text style={styles.instructions}>
//       //     To get started, edit index.ios.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     Press Cmd+R to reload,{'\n'}
//       //     Cmd+D or shake for dev menu
//       //   </Text>
//       //       {
//       //         <Image source={pic} style={styles.imageStyle}/>
//       //       }
//       //       <TextInput style ={{height: 50, padding: 10}}
//       //        placeholder="Type here"
//       //       onChangeText = {(text) => console.log(text)} />
//       //
//       //       <Button
//       //       color="#841584"
//       //       onPress= {() => {Alert.alert('tapped on button')}}
//       //       title= "PRESS ME"
//       //       />
//     }
//             <FlatList
//                 data={[
//                   {key: 1, name:'Davin'},
//                   {key: 2, name:'Davin'},
//                   {key: 3, name:'Davin'},
//                   {key: 'retery'},
//                   {key: 'sdfwer'},
//                   {key: 'dfg'},
//                   {key: 'mn'},
//                   {key: 'bvnmn'},
//                   {key: 'vcb'},
//                   {key: 'zxcv'},
//                   {key: 'sdf'},
//                   {key: 'hgj'},
//                   {key: 'uyi'},
//                   {key: 'oiuo'},
//                   {key: 'ytu'},
//                   {key: 'wer'},
//                   {key: 'ret'},
//                   {key: 'ert'},
//                   {key: 'hg'},
//                   {key: 'fdg'},
//                   {key: 'sda'},
//                   {key: 'sf'},
//                   {key: 'ffa'},
//                   {key: 'af'}
//                 ]}
//                 renderItem = {({item}) =>
//                 <Greeting style={styles.item} nam={item.key}/>
//                }
//               />
//
//         <SectionList
//          sections={[
//            {key: 1, title: 'D', data: ['Devin']},
//            {key: 2, title: 'J', data: ['Jackson','James','Jillian','Jimmy','Joel','John','Julie']},
//          ]}
//
//          renderItem={({item}) =>
//          <Text style={styles.item}>{item}</Text>
//        }
//          renderSectionHeader={({section}) =>
//          <Text style={styles.sectionHeader}>{section.title}</Text>
//        }
//
//        keyExtractor={(item, index) => index}
//        />
//       </View>
//       //</ScrollView>
//     );
//   }
//
//   componentWillReceiveProps(nextProps) {
// //    debugger;
//   }
//
//   shouldComponentUpdate() {
//   //  debugger;
//     return true;
//   }
//
//   componentWillUpdate() {
//     //debugger;
//   }
//
//   componentDidUpdate() {
//   //  debugger;
//   }
//
//   componentWillUnmount(){
//     //debugger;
//   }
//
// }
//
// class PresentationComponent extends Component {
//   render() {
//     debugger;
//     return (
//       <Text onPress = {this.props.updateState}>
//        Hyyy!!! {4+4} {this.props.test}!!!{this.props.test1}
//        </Text>
//
//     );
//   }
// }
//
// class Greeting extends Component {
//   render() {
//     return (
//       <Text style = {this.props.style}>Hello {this.props.nam}!</Text>
//     );
//   }
// }
//
// Greeting.defaultProps = {
//   nam: 'Aaditya'
// }
//
// PresentationComponent.defaultProps = {
//   test: 'Test',
//   test1: 'Test1'
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//         ios: {
//           backgroundColor: 'lightblue',
//         },
//         android: {
//           backgroundColor: 'blue',
//         },
//       }),
//   },
//   welcome: {
//     fontSize: 10,
//     textAlign: 'center',
//     alignItems: 'center',
//     margin: 5,
//     color: 'white',
//     width: 260,
//     height: 44,
//     backgroundColor: '#2196F3'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5
//   },
//   imageStyle: {
//     width: 193,
//     height: 110,
//   },
//   button: {
//     marginTop: 5,
//     marginBottom: 10,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonHeader: {
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   },
//   item: {
//     padding: (Platform.OS === 'ios') ? 10 : 10,
//     fontSize: 18,
//     height: 44,
//   },
// });
