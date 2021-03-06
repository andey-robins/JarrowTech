//Lab users will select to log a report 
// for now this is just the preliminary page
import * as firebase from 'firebase';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Typography, Spacing, Buttons } from '../../styles/index';

export default class Lab extends Component {
    constructor(props) {
        super(props)
        this.state= ({ });
    }

    onSignoutPress = () => {
        firebase.auth().signOut().then(() => {
            Alert.alert("Successfully signed out")
        }, (error) => {
            Alert.alert(error.message);
        });
        this.props.navigation.navigate('Login');
    }
   

    render(){
        return(
            <View style={Spacing.colorContainer}>
                <Text style={Typography.buttonText}>
                    Lab Report page
                </Text>
                <TouchableOpacity style={Buttons.button} onPress={() => this.props.navigation.navigate('LogReport')}>
                    <Text style={Typography.buttonText}>
                        Log Report
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Buttons.button} onPress={()=>this.onSignoutPress(this.state.email)}>
                    <Text style={Typography.buttonText}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
