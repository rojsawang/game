import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

var Style = StyleSheet.create({
  bg:{
    width:window.width,
    height:window.height,
    backgroundColor:'#ffffff',
    opacity: 0,
  },
  cursor:{
    width:140,
    height:130,
  },
});

export default Style;
