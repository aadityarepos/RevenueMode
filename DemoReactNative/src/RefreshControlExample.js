/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RefreshControlExample
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  ScrollView,
  StyleSheet,
  RefreshControl,
  ToolbarAndroid,
  Text,
  TouchableWithoutFeedback,
  View,
  ToastAndroid,
} = ReactNative;

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});

class Row extends React.Component {
  _onClick = () => {
    this.props.onClick(this.props.data);
  };

  render() {
    return (
     <TouchableWithoutFeedback onPress={this._onClick} >
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class RefreshControlExample extends React.Component {
  state = {
    isRefreshing: false,
    loaded: 0,
    rowData: Array.from(new Array(20)).map(
      (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
  };

  _onClick = (row) => {
    ToastAndroid.show('This is my first Toast', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  };

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick}/>;
    });
    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="black"
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }>
        {rows}
      </ScrollView>
    );
  }

  _onRefresh = () => {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  };
}

module.exports = RefreshControlExample;
