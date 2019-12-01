import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";

import NavigationService from './NavigationService';
import { Images } from '.././Constants';
import MainNavigator from './MainNavigator';

class AppNavigator extends Component {
  componentDidMount() {
  }

  render() {
      return (
        <View style={{flex:1}}>
          <MainNavigator 
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(AppNavigator);