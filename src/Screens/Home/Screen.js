import React, { Component } from 'react';
import { Text, View,PermissionsAndroid,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { dH, dW } from '../../Constants';
import { isEmpty } from 'lodash';
import {loginUserInFirebase} from './Action'
import {validEmail} from '../../Constants';

class Screen extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"rahulshakya@hotmail.com",
      password:"rahulshakya@hotmail.com",
      error:{
        email:false,
        password:false,
      }
    }
  }

  login(){
    const err = {
      email: !validEmail(this.state.email),
      password: isEmpty(this.state.password), 
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
      this.props.loginUserInFirebase(this.state)
    }else{
      alert("You have some validation errors")
    }
    
  }
  componentDidMount = () => {
    
    async function requestStoragePermission() {
      try {
        
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: " Gameday App Permission",
            message: " GamedayApp needs access to your storage "
          }
        );
        console.warn(granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //console.warn("You can use the CAMERA");
        } else {
          //console.warn("CAMERA permission denied");
        }
      } catch (err) {
        //console.warn(err);
      }
    }
    if (Platform.OS === "android") {
      requestStoragePermission();
    }
  };

  render() {
    this.props.home.response && alert("Response "+this.props.home.response.user.email)
    this.props.home.isError && alert("Error occured. Please try again")
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
        {this.props.home.isFetching ? <ActivityIndicator size="small" /> :
        <TouchableOpacity onPress = {() => this.login()} style={{borderWidth:1, paddingVertical:8, paddingHorizontal:32}}>
          <Text>Login</Text>
        </TouchableOpacity>}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('register')} style={{borderWidth:1, paddingVertical:8, paddingHorizontal:32}}>
          <Text>Go To Register</Text>
        </TouchableOpacity>
        </View>    
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    home: state.home
  });

const mapDispatchToProps = (dispatch) => ({
  loginUserInFirebase: (email, password) => dispatch(loginUserInFirebase(email, password)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Screen)