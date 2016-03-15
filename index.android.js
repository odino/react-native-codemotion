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

    setTimeout(() => this.props.navigator.push({name: 'demo'}), 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
      </View>
    );
  }
}

class Demo extends Component {
  render() {
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
}

var ROUTES = {
  intro: Intro,
  demo: Demo
}

class Codemotion extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name: 'intro', index: 0}}
          renderScene={function(route, navigator){
            var Scene = ROUTES[route.name]

            return <Scene navigator={navigator} />
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
