import React, { Component } from 'react';
import { Image, View } from 'react-native';

class MainComponent extends Component {
  render() {
    return (
      <View style = {{flex: 1}}>
        <Image source={require('./navigation1.png')} style = {{backgroundColor: 'green', width: 40, height: 40}} />
        </View>
    );
  }
}

export default MainComponent;
