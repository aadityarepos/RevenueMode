import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { fetchPeopleFromAPI } from '../actions';

class TestScreen extends Component {
  constructor(props) {
    super(props);
  }

  loadPeopleData() {
    if (this.props.people.isFetching)
      return;

    this.props.getPeople();
  }

  render() {
    const { people, isFetching } = this.props.people;

    return (
      <View style={myStyles.container}>
        <TouchableHighlight style = {myStyles.button} onPress={() => this.loadPeopleData()}>
          <Text style={myStyles.buttonText}>Load People</Text>
        </TouchableHighlight>
        {
          isFetching && <Text>Loading</Text>
        }
        {
          people.length ? (
            people.map((person, i) => {
              return <View key = {i} >
                <Text>Name: { person.name }</Text>
                <Text>Birth Year: {person.birth_year} </Text>
              </View>
            })
          ) : null
        }
      </View>
    )
  }
}

const myStyles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestScreen)
