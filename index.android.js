/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Cursor from './src/components/Cursor.js';
import Touch from './src/components/Touch.js';

import { Motion, spring } from 'react-motion';

const springConfig = { stiffness: 120, damping: 26 };
// const Dimensions = require('Dimensions');
// const window = Dimensions.get('window');

export default class app extends Component {

  // handlePress(evt) {
  //   console.log(`X = ${evt.nativeEvent.locationX}`);
  //   console.log(`Y = ${evt.nativeEvent.locationY}`);
  // }

  // <Cursor />
  // <TouchableOpacity onPress={(evt) => this.handlePress(evt) }>
  //   <Touch />
  // </TouchableOpacity>

  constructor(props) {
    super(props);
    this.state = {
      positionX:0,
      positionY:0,

    }

  }

  handlePositionPress = (_x, _y) => {
    this.setState({
      positionX:_x,
      positionY:_y,
    })
  }

  render() {
    console.log('Index', this.state,'positionX',this.state.positionX);
    return (
      <View>
        <Cursor position={{ x: this.state.positionX, y: this.state.positionY }} />
        <Touch onPositionPress={this.handlePositionPress} />
      </View>
    );
  }
}

// <Cursor style={{ position: 'absolute', top: this.state.positionY, left: this.state.positionX }} />
// <Cursor position={{ x: this.state.positionX, y: this.state.positionY }} />
// style={{ position: 'absolute', top: position.y, left: position.x }}
/*
<Motion defaultStype={{x:0, y: 0}} style={{
  x: spring(this.state.positionX, springConfig),
  y: spring(this.state.positionY, springConfig),
}}>
{int =>
  <Cursor position={{ x: int.x, y: int.y }} />
}
</Motion>
*/
AppRegistry.registerComponent('app', () => app);
