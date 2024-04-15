import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
const TombolBorrow = ({id, navigation}) => {
    return (
        <>
            <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('Transactions', {id: id})}>
                <Text style={styles.tekstombol}>Borrow</Text>
            </TouchableOpacity>
        </>
    )
}

export default TombolBorrow

const styles = StyleSheet.create({
    tombol: {
        height: 50,
        width: width - 10,
        backgroundColor: '#2c3e50',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Montserrat-Reguler',
      },
      tekstombol: {
        color: '#fff',
        fontSize: 20,
      },
})
