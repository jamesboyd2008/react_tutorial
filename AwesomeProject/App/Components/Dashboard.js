import React, {
  Component
} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component{
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if(btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          styles={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View dis Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          styles={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View dis Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
        styles={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View dis Profile </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Dashboard;
