// components/login.js

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Error', 'Fill the box to signin');
    } else {
      FIREBASE.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          this.setState({
            email: '',
            password: '',
          });
          this.props.navigation.navigate('NavigationTab');
        })
        .catch(
          error => Alert.alert('Error', 'Please check your email or password!'),
        );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewgambar}>
          <Image
            style={styles.logo}
            source={require('../../assets/books.png')}
          />
        </View>
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
        <TouchableOpacity onPress={() => this.userLogin()}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableOpacity>

        <Text
          style={styles.teksdaftar}
          onPress={() => this.props.navigation.navigate('RegisterPage')}>
          Don't have account? Signup
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
  teksdaftar: {
    color: '#2c3e50',
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
  viewgambar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
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
