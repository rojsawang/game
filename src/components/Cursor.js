import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  View,
  Image
} from 'react-native';

import Style from '../styles/Style.js';
import { Motion, spring } from 'react-motion';

// import { StaggeredMotion, Motion, spring } from 'react-motion';

class Cursor extends Component {

  static propTypes = {
    onPositionCursor:PropTypes.func,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }

  render() {
    const { position } = this.props;

    // <View style={{
    //   position: 'absolute',
    //   WebkitTransform: `translate3d(${x}px, 0, 0)`,
    //   transform: `translate3d(${x}px, 0, 0)`,
    //
    // }}>
    console.log('xxxxxxxxxxxxxxx', position.y);

    return (
      <Motion defaultStyle={{width:0, top:300}} style={ {width:position.x, top:position.y }}>
        {interpolatingStyle =>
          <View style={interpolatingStyle}>
            <Image style={Style.cursor} source={require('../images/cursor_01.png')} />
          </View>

        }
      </Motion >

    );
  }
}

// <Motion defaultStyle={{translateX:0, translateY:0}} style={ {translateX:spring(position.x), translateY:spring(position.y) }}>
// <View style={{ position: 'absolute', top: position.y, left: position.x }}>
//   <Image style={Style.cursor} source={require('../images/cursor_01.png')} />
// </View>
// Transforms
// <View style={{ position: 'absolute', top: position.y, left: position.x }}>
//   <Image style={Style.cursor} source={require('../images/cursor_01.png')} />
// </View>

// <View style={{ position: 'absolute', top: position.y, left: position.x }}>
//   <Image style={Style.cursor} source={require('../images/cursor_01.png')} />
// </View>

/*
<View style={{
  position: 'absolute',
  top: position.y,
  left: position.x,
}}>
  <Image style={Style.cursor} source={require('../images/cursor_01.png')} />
</View>

*/

export default Cursor;
