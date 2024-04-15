import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const CardHome = ({ BukuItem }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: BukuItem.Image}} style={styles.image} />
        <View style={styles.viewheadertext}>
          <Text style={styles.textheader}>{BukuItem.Judul}</Text>
        </View>
      </View>
      <View style={styles.viewcontent}>
        <Text style={styles.textcontent}>{BukuItem.Deskripsi}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewheadertext: {
    flex: 1,
    justifyContent: 'center',
  },
  textheader: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c3e50',
  },
  textcontent: {
    textAlign: 'center',
    borderTopWidth: 1,
    fontFamily: 'Montserrat-Italic',
    color: '#2c3e50',
  },
  viewcontent: {
    padding: 5,
  },
  image: {
    width: 40,
    height: 60,
  },
});
