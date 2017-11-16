import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Spinner, Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';



class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(password){
    this.props.passwordChanged(password);
  }

  onButtonPressed(){
    const {email, password} = this.props;
    this.props.loginUser({email, password})
  }

  renderButton() {
    if (this.props.loading){
        return <Spinner size='large' />;
    }
    else {
      return(<Button
        onPress={this.onButtonPressed.bind(this)}
      >
        Log In
      </Button>
    )
    }
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry={true}
          />
        </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignItems: 'center',
    color:'red'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
