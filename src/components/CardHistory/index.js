import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CardHistory = ({id, TransactionsItem, DeleteData, navigation}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tekstitle}>{TransactionsItem.judul}</Text>
        <Text style={styles.teksauthor}>Date of Return : </Text>
        <Text style={styles.teksauthor}>{TransactionsItem.tanggal}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome5 name="edit" size={18} color="#2c3e50" onPress={() => navigation.navigate('Edit', {id: id})} />
        <FontAwesome5 name="trash" size={18} color="#2c3e50" onPress= {()=> DeleteData(id) }/>
      </View>
    </TouchableOpacity>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffe',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    backgroundColor: '#ffe',
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
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
