import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import { TombolBorrow } from "../../components";

export default class DetailCollections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailnya: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Collections/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let KoleksiItem = {...data};

        this.setState({
          detailnya: KoleksiItem,
        });
      });
  }

  render() {
    const {detailnya} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={{uri: detailnya.img}} style={styles.image} />
          <Text style={styles.booktitle}>{detailnya.Judul}</Text>
          <Text style={styles.desc}>{detailnya.desc}</Text>
          <TombolBorrow detailnya={detailnya} {...this.props} id={this.props.route.params.id} />
        </ScrollView>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
  booktitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: width,
    height: 600,
  },
  desc: {
    fontSize: 14,
    padding: 2,
    textAlign: 'justify',
    marginBottom: 5,
  },
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
});
