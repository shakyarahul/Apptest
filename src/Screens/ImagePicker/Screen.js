import React, { Component } from 'react';
import { Text, View,TextInput,PermissionsAndroid,TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { dH, dW } from '../../Constants';
import { isEmpty } from 'lodash';
import {storeInFirebase} from './Action'
import {validEmail} from '../../Constants';
import CameraRollPicker from 'react-native-camera-roll-picker';
class Screen extends Component {
  constructor(props){
    super(props)
    this.state={
      images:[],
      error:{
        images:false
      }
    }
  }

  uploadToStorage(){
    const err = {
      images: this.state.images.length == 0
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
      this.state.images.map((v,i) => {
        this.props.storeInFirebase(v)
      })
    }else{
      alert("Please select minimum one image")
    }
    
  }
  getSelectedImages = images => this.setState({ images });
  render() {
    this.props.home.response && alert("Response "+this.props.home.response.user.email)
    this.props.home.isError && alert("Error occured. Please try again")
    return (
      <View style={{flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 8}}>
          <View style={{flex:6}}>
            <CameraRollPicker
              selected={this.state.images}
              callback={this.getSelectedImages}
              backgroundColor={"#000"}
              assetType="All"
            />
          </View>
        <View style={{flex:1}}>
          <TouchableOpacity onPress={() => this.uploadToStorage()} style={{borderWidth:1, paddingVertical:8, paddingHorizontal:32}}>
            <Text>Upload</Text>
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
  storeInFirebase: (state) => dispatch(storeInFirebase(state)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Screen)