import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginPage');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/books.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
