import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

const News = ({navigation}) => {
  const [news, setNews] = useState();
 
  const getNews = async () => {
    let response = await axios.get(
      'https://macsnewsscraper.herokuapp.com/news',
    );
    setNews(response.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const Item = ({ title, content, imgsrc, href, timestamp }) => (
    <View style={styles.item}>
      {imgsrc ? <Image style={styles.avatar} source={{ uri: imgsrc }}></Image> :<Image style={styles.avatar} source={require("../../images/logo.png")}></Image>}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Article', { href: href })}
      ><Text style={styles.buttonTitle}>Read more</Text></TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      content={item.content}
      timestamp={item.timestamp}
      href={item.href}
      imgsrc={item.imgsrc}
    />
  );

  return (
    <ImageBackground
      source={require('../../images/abstract2.jpg')}
      style={styles.image}>
      <View>
        {!news ? (
          <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
        ) : (
          <FlatList data={news} renderItem={renderItem} keyExtractor={(item, index) => index}></FlatList>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  header: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    textAlign: "center"
  },
  item: {
    backgroundColor: 'rgba(0,0,255, 0.7)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "white",
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontFamily: 'ForumRegular',
    color: "white",
    marginBottom: 10,
    marginHorizontal: "2%"
  },
  content: {
    fontSize: 18,
    fontFamily: 'EBGaramond',
    color: "white",
    marginBottom: 10,
    marginHorizontal: "2%",
    textAlign:"justify"
  },
  avatar: {
    marginTop: 5,
    flex: 1,
    resizeMode: "contain",
    width: 300,
    height: 200,
    marginHorizontal: "5%"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },


  timestamp: {
    fontSize: 16,
    color: "white",
    fontFamily: 'ForumRegular',
    marginBottom: 15,
    marginHorizontal: "1%"
  },
  button: {
    flex: 1,
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#00008B",
    marginHorizontal: "5%"
  },
  buttonTitle: {
    color: "#fff",
    fontFamily: 'ForumRegular',
    textAlign: "center",
    fontSize: 18,
  }
});
export default News;
