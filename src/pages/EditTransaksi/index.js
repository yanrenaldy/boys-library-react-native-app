import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import DatePicker from 'react-native-date-picker';

export default class EditTransaksi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailnya: {},
      date: new Date(),
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Transactions/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let KoleksiItem = {...data};

        this.setState({
          detailnya: KoleksiItem,
        });
      });
  }

  onSubmit = () => {
    const TransRef = FIREBASE.database().ref(
      'Transactions/' + this.props.route.params.id,
    );
    const trans = {
      judul: this.state.detailnya.judul,
      tanggal: '' + this.state.date,
    };
    TransRef.update(trans)
      .then(data => {
        Alert.alert('Success!', 'Transaction changed successfully');
        this.props.navigation.replace('NavigationTab');
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    const {detailnya} = this.state;
    const currdate = new Date();
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.judul}> {detailnya.judul} </Text>
        <Text style={styles.teks}>Please choose the return due date</Text>
        <DatePicker
          date={this.state.date}
          minimumDate={currdate}
          onDateChange={date =>
            this.setState({date}, () => {
              console.log(this.state.date);
            })
          }
        />
        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.tekstombol}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    flex: 1,
  },
  judul: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  teks: {
    paddingTop: 10,
    fontSize: 16,
    paddingBottom: 20,
  },
  tombol: {
    height: 50,
    width: '100%',
    backgroundColor: '#2c3e50',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Montserrat-Reguler',
    marginTop: 10,
  },
  tekstombol: {
    color: '#fff',
    fontSize: 20,
  },
});
