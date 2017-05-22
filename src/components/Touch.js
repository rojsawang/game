import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Style from '../styles/Style.js';
import Cursor from './Cursor.js';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Touch extends Component {

  static propTypes = {
    onPositionPress:PropTypes.func,
  }

  handlePositionPress = (evt) => {
    // console.log(`X = ${evt.nativeEvent.locationX}`);
    // console.log(`Y = ${evt.nativeEvent.locationY}`);
    // this.props.onPositionPress(evt);
    // this.props.onPositionPress(evt.nativeEvent.locationX, evt.nativeEvent.locationY);
    this.props.onPositionPress(evt.nativeEvent.locationX - (140 / 2), evt.nativeEvent.locationY - (130 / 2));
    console.log('handlePositionPress +++++++++++++++++++ ',Style.cursor);

  }


  render() {
    // <Cursor onPositionCursor={this.onHandlePosition} />
    // console.log(`height, width` , window.width, window.height);
    return (
      <TouchableOpacity style={Style.bg} onPressIn={(evt) => this.handlePositionPress(evt) } />
    );
  }
}

export default Touch;
