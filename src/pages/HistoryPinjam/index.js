import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import {CardHistory} from '../../components';

export default class HistoryPinjam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaksi: {},
      transaksikey: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this._onRefresh();
  }

  _onRefresh = () => {
    FIREBASE.database()
      .ref('Transactions')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let TransactionsItem = {...data};

        this.setState({
          transaksi: TransactionsItem,
          transaksikey: Object.keys(TransactionsItem),
        });
      });
  };

  DeleteData = (id) => {
    Alert.alert(
      "Warning",
      "Are you sure to cancel this transaction?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          FIREBASE.database()
          .ref('Transactions/'+id)
          .remove();
          this._onRefresh();
          Alert.alert('Success!', 'Data deleted successfully!')
        } }
      ]
    );
  }

  render() {
    const {transaksi, transaksikey} = this.state;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View style={styles.container}>
          <Text style={styles.teksheader}>Transactions History</Text>
          {transaksikey.length > 0 ? (
            transaksikey.map(key => (
              <CardHistory
                key={key}
                TransactionsItem={transaksi[key]}
                id={key} DeleteData={this.DeleteData}
                {...this.props}
              />
            ))
          ) : (
            <Text>No Transaction History</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  teksheader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
  },
});
