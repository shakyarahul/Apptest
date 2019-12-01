import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dH, dW } from '../../Constants';
import { isEmpty } from 'lodash';
import {registerUserInFirebase} from './Action'
import {validEmail} from '../../Constants';

class Screen extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"rahulshakya@hotmail.com",
      password:"rahulshakya@hotmail.com",
      confirmPassword:"rahulshakya@hotmail.com",
      error:{
        email:false,
        password:false,
        confirmPassword:false
      }
    }
  }

  register(){
    const err = {
      email: !validEmail(this.state.email),
      password: (this.state.password !== this.state.confirmPassword) || isEmpty(this.state.password), 
    }
    this.setState({
      ...this.state,
      error:{
        ...this.state.error,
        ...err
      }
    })
    const hasError = Object.values(err);
    if(!hasError.includes(true)){
      this.props.registerUserInFirebase(this.state)
    }else{
      alert("You have some validation errors")
    }
    
  }
  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 8}}>
        <View>
          <Text>Email</Text>
          <TextInput style={[{borderWidth:1, minWidth:'100%'},this.state.error.email && {borderColor:'#f00'}]} value={this.state.email} onChangeText={(email) => this.setState({...this.state,email, error:{...this.state.error, email:false}})} ></TextInput>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput value={this.state.password} onChangeText={(password) => this.setState({...this.state,password, error:{...this.state.error, password:false}})} style={[{borderWidth:1, minWidth:'100%'},,this.state.error.password && {borderColor:'#f00'}]}></TextInput>
        </View>
        <View>
          <Text>Confirm Your Password</Text>
          <TextInput value={this.state.confirmPassword} onChangeText={(confirmPassword) => this.setState({...this.state,confirmPassword})} style={{borderWidth:1, minWidth:'100%'}}></TextInput>
        </View>
        <View>
        <TouchableOpacity onPress = {() => this.register()} style={{borderWidth:1, paddingVertical:8, paddingHorizontal:32}}>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={{borderWidth:1, paddingVertical:8, paddingHorizontal:32}}>
          <Text>Go To LogIn</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  });

const mapDispatchToProps = (dispatch) => ({
  registerUserInFirebase: (email, password) => dispatch(registerUserInFirebase(email, password)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Screen)