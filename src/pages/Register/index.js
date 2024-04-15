// components/signup.js

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Error', 'Please fill the textbox!');
    } else {
      FIREBASE.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          this.setState({
            displayName: '',
            email: '',
            password: '',
          });
          this.props.navigation.navigate('LoginPage');
          Alert.alert('Success!', 'Account created successfully!')
        })
        .catch(
          error => Alert.alert('Error', 'Please fill carefully!'),
        );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewteks}>
          <Text>Fill the textbox!</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={val => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={val => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={val => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => this.registerUser()}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('LoginPage')}>
          Already Registered? Login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#2c3e50',
    backgroundColor: '#fff',
    color: '#2c3e50',
    marginBottom: 10,
  },
  viewteks: {
    paddingBottom: 10,
    paddingTop: 5,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#2c3e50',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    color: '#fff',
    fontFamily: 'Montserrat-Reguler',
  },
});
