import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute = {{
          title: 'GitHub Note Taker',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
