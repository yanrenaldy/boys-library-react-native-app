import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import imgBanner from '../../assets/wall.jpg';
import FIREBASE from '../../config/FIREBASE';
import {CardCollections} from '../../components';

export default class Collections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      koleksi: {},
      koleksikey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Collections')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let KoleksiItem = {...data};

        this.setState({
          koleksi: KoleksiItem,
          koleksikey: Object.keys(KoleksiItem),
        });
      });
  }

  render() {
    const {koleksi, koleksikey} = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.imageBanner} source={imgBanner} />
        <Text style={styles.greetingText}>Collections</Text>
        <View style={styles.wrapperIsi}>
          <ScrollView>
            <View style={styles.textIsi}>
              {koleksikey.length > 0 ? (
                koleksikey.map(key => (
                  <CardCollections
                    key={key}
                    KoleksiItem={koleksi[key]}
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
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageBanner: {
    height: 200,
    width: width,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
  },
  wrapperIsi: {
    marginHorizontal: 18,
    marginTop: -90,
    backgroundColor: '#EDF0F2',
    elevation: 4,
    borderRadius: 10,
    height: 620,
  },
  textIsi: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  preloader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
