import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
  const {headerContainer, textHeader} = styles;

  return(
    <View style={headerContainer}>
      <Text style={textHeader}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  headerContainer:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height:60,
    paddingTop:15,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'
  },
  textHeader:{
    fontSize: 20
  }
}

export {Header};
