import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{
  componentWillUpdate(){
      LayoutAnimation.spring();
  }

  renderDescription(){
    const {library, expanded} = this.props;

    if(expanded){
      return (
        <Text style={{flex:1}}>
          {library.description}
        </Text>
      )
    }
  }

  render(){
    const {titleStyle} = styles;
    const {id, title} = this.props.library;

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize:18,
    paddingLeft:15
  }
};

const mapStateToProp = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return{
    expanded: expanded
  };
}

export default connect(mapStateToProp, actions)(ListItem);