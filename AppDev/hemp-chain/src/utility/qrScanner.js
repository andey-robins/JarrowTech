//This will be the display page for when a regulator wants to search up a transaction
import * as firebase from 'firebase';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Typography, Spacing, UserInterface, Buttons } from '../styles/index';

export default class CheckDestination extends Component{
    constructor(props) {
        super(props)
        this.state= ({
            serial: '',
    });}

    submitSerial = () => {
        this.props.route.params.submitSerial(this.state.serial);
        this.props.navigation.goBack();
    }

    barcodeRecognized = e => {
        this.setState({serial: e.data})
    }

    render(){
        return(
            <View style={Spacing.colorContainer}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        width: '50%',
                    }}
                    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onBarCodeRead={this.barcodeRecognized}>
                </RNCamera>
                <TextInput style={UserInterface.inputBox}
                 placeholder="Serial Number"
                 placeholderTextColor='#ffffff'
                 ref={(input) => this.serial = input}
                 onChangeText={(serial) => this.setState({serial})}
                 value={this.state.serial} />
                <TouchableOpacity style={Buttons.button} onPress={() => this.submitSerial()}>
                    <Text style={Typography.buttonText}>
                        Search Serial
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Buttons.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={Typography.buttonText}>
                        Go Back
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
