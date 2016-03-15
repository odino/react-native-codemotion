/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  TouchableNativeFeedback,
  ToastAndroid,
  Navigator,
} from 'react-native';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    setTimeout(() => this.setState({loaded: true}), 2000)
  }

  render() {
    if (this.state.loaded) {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Codemotion 2016!
            </Text>
            <TouchableNativeFeedback
                onPress={() => ToastAndroid.show('PERL sucks', ToastAndroid.SHORT)}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View>
                  <Text style={styles.instructions}>
                    To get started, edit index.android.js
                  </Text>
                </View>
            </TouchableNativeFeedback>
          </View>
        )
    }

    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
      </View>
    );
  }
}

var ROUTES = {
  intro: Intro
}

class Codemotion extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name: 'intro', index: 0}}
          renderScene={function(route, navigator){
            var Scene = ROUTES[route.name]

            return <Scene />
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Codemotion', () => Codemotion);
