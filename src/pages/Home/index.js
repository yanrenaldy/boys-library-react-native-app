import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import {CardHome} from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buku: {},
      bukukey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Buku')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let BukuItem = {...data};

        this.setState({
          buku: BukuItem,
          bukukey: Object.keys(BukuItem),
        });
      });
  }

  render() {
    const {buku, bukukey} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.judul}>
          <Text style={styles.titleText}>Boy's Library</Text>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.top5}>Top 5 Books</Text>
            {bukukey.length > 0 ? (
              bukukey.map(key => (
                <CardHome
                  key={key}
                  BukuItem={buku[key]}
                  id={key}
                  {...this.props}
                />
              ))
            ) : (
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#2c3e50" />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 45,
  },
  judul: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    width: 35,
    height: 35,
  },
  titleText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    paddingBottom: 10,
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
  },
  textcontent: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat-Italic',
  },
  viewcontent: {
    padding: 5,
  },
  image: {
    width: 40,
    height: 60,
  },
  top5: {
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  preloader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
