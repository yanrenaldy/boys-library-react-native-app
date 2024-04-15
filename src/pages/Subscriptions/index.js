import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const Subscriptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.teksheader}>Subscriptions</Text>
      <View style={styles.viewprofil}>
        <Image
          style={styles.icon}
          source={require('../../assets/1month.png')}
        />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>1 Month Subscription Rp. 10.000</Text>
        </View>
        <View>
          <Button color="#2c3e50" title="Buy" />
        </View>
      </View>

      <View style={styles.viewprofil}>
        <Image
          style={styles.icon}
          source={require('../../assets/3month.png')}
        />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>3 Month Subscription Rp. 25.000</Text>
        </View>
        <View>
          <Button color="#2c3e50" title="Buy" />
        </View>
      </View>

      <View style={styles.viewprofil}>
        <Image
          style={styles.icon}
          source={require('../../assets/6month.png')}
        />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>6 Month Subscription Rp. 40.000</Text>
        </View>
        <View>
          <Button color="#2c3e50" title="Buy" />
        </View>
      </View>
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  viewprofil: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  viewteks: {
    flex: 1,
  },
  teksheader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
  },
});
