import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teksheader}>Profile</Text>
      <View style={styles.header}>
        <Image
          style={styles.fotoprofil}
          source={require('../../assets/profil.png')}
        />
      </View>
      <View style={styles.viewprofil}>
        <Image
          style={styles.icon}
          source={require('../../assets/profileicon.png')}
        />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>Name</Text>
          <Text style={styles.teksisi}>Billie Eilish</Text>
        </View>
        <View>
          <Image
            style={styles.icon}
            source={require('../../assets/edit.png')}
          />
        </View>
      </View>

      <View style={styles.viewprofil}>
        <Image style={styles.icon} source={require('../../assets/email.png')} />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>Email</Text>
          <Text style={styles.teksisi}>billieeilish@gmail.com</Text>
        </View>
      </View>

      <View style={styles.viewprofil}>
        <Image style={styles.icon} source={require('../../assets/phone.png')} />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>Phone Number</Text>
          <Text style={styles.teksisi}>+1 641-9800-5100</Text>
        </View>
      </View>

      <View style={styles.viewprofil}>
        <Image style={styles.icon} source={require('../../assets/subs.png')} />
        <View style={styles.viewteks}>
          <Text style={styles.teksjudul}>Subscription</Text>
          <Text style={styles.teksisi}>Free</Text>
        </View>
        <View>
          <Button color="#2c3e50" title="Buy" onPress={() => navigation.navigate('Subscriptions')}/>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fotoprofil: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  teksheader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
  },
  teksjudul: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#2c3e50',
    paddingLeft: 10,
  },
  teksisi: {
    fontFamily: 'Montserrat-Reguler',
    fontSize: 15,
    paddingLeft: 10,
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
});
