import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../images/abstract2.jpg')}
      style={styles.image}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Welcome back!</Text>
        <Image
          style={styles.avatar}
          source={require('../../images/logo.png')}></Image>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  avatar: {
    marginTop: 5,
    flex: 1,
    resizeMode: 'contain',
    width: 300,
    height: 200,
    marginHorizontal: '5%',
  },
  sectionLogo: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0,0,255,0.5)',
    color: 'white',
  },
  sectionTitle: {
    marginTop: 5,
    fontSize: 45,
    fontFamily: 'PoiretOne-Regular',
    color: 'white',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
export default Home;
