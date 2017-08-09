import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { connect } from 'react-redux'

import { signUp, signOut } from '../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleLogin = () => {
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style = { styles.container } >
      <TextInput
        style = {styles.input}
        placeholder= "email/username"
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholderTextColor = "white"
        returnKeyType = 'next'
        onSubmitEditing = {() => this.passwordInput.focus()}
        keyboardType = 'email-address'
        value = { this.state.username }
        onChangeText= {(text) => this.setState({ username: text })}
      />
      <TextInput
        style = { styles.input }
        placeholder= "password"
        placeholderTextColor = "white"
        underlineColorAndroid='rgba(0,0,0,0)'
        secureTextEntry
        returnKeyType = "go"
        ref = {(input) => this.passwordInput = input}
        value = { this.state.password }
        onChangeText = {(text) => this.setState({ password: text })}
      />

      <TouchableOpacity style = {styles.buttonContainer}>
        <Text style = { styles.buttonText} onPress = { this.handleLogin } >Submit</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    fontSize: 14
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    padding:15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }
});

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps (dispatch) {
  return {
      login: (username, password) => dispatch(signUp(username, password)),
      logout: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm)
