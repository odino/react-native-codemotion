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
  Animated,
} from 'react-native';

class Intro extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => this.props.navigator.push({name: 'demo'}), 1000)
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
  constructor(props) {
    super(props)

    this.state = {show: false}
  }

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
        <TouchableNativeFeedback
            onPress={() => this.setState({show: !this.state.show})}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View>
              <Text style={styles.instructions}>
                Tell me something new?
              </Text>
              <Fader show={this.state.show} from={0} to={1} >
                <Text style={styles.instructions}>
                  PHP also sucks!
                </Text>
              </Fader>
            </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

class Fader extends Component {
    constructor(props) {
      super(props);

      this.state = {
        opacity: new Animated.Value(this.props.from),
        show: false
      };
    }

    render() {
      return (
        <Animated.View
          style={{
            flex: 1,
            opacity: this.state.opacity
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }

    componentWillReceiveProps(props) {
      if (props.show) {
        Animated.timing(
          this.state.opacity, {toValue: this.props.to, duration: 400}
        ).start();
      } else if (this.state.opacity.__getValue() > this.props.from) {
        Animated.timing(
          this.state.opacity, {toValue: this.props.from, duration: 400}
        ).start();
      }
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
