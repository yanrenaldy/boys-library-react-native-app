import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CardCollections = ({id, KoleksiItem, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', {id: id})}>
      <View style={styles.header}>
        <Text style={styles.tekstitle}>{KoleksiItem.Judul}</Text>
        <Text style={styles.teksauthor}>Authors : {KoleksiItem.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCollections;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
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
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tekstitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  teksauthor: {
    fontSize: 14,
    color: '#2c3e50',
  },
});
