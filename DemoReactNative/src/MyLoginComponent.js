import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import LoginForm from './LoginForm';

class MyLoginComponent extends React.Component {
  static  navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <View style = { styles.container } >

      <View style = { styles.logoContainer } >
        {
          //<Image source = {require('../img/logo.png')} style = { styles.logo } />
        }
        <Text style = { styles.title } >Newput Infotec private limited </Text>
      </View>

      <View style = { styles.formContainer }>
        <LoginForm />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: 'red'
  },
  formContainer: {

  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center'
  }
});

module.exports = MyLoginComponent;
