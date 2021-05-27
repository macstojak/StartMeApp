import axios from "axios";
import React, {useState, useEffect} from "react";
import {Image, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, View, Text, ActivityIndicator, StyleSheet} from "react-native";

const Article = (data) =>{
    const [article, setArticle] = useState();
    const getArticle = async () =>{
        let href=data.route.params.href;
        try{
            let a = await axios.get(`https://macsnewsscraper.herokuapp.com/news/article?href=${href}`);
            setArticle(a.data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getArticle();
    },[]);

return(
     <ImageBackground 
            source={require('../../images/abstract2.jpg')}
            style={styles.image}>
    <View>
   
        {article
        ?
        (

        <ScrollView style={styles.item}>
          
            <Image style={styles.avatar} source={{ uri: article.imgsrc }}></Image> 
            <Text style={styles.title}>{article.header}</Text>
            <Text style={styles.timestamp}>{article.author}</Text>
            <Text style={styles.timestamp}>{article.magazine}</Text>
            <Text style={styles.content}>{article.content}</Text>
            <Text style={styles.timestamp}>{article.source}</Text>
            
        </ScrollView>
        )
        :
        <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
    }
    
    </View>
    </ImageBackground>
)
}


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
      marginHorizontal: "1%"
    },
    button: {
      flex: 1,
      marginTop: 5,
      paddingVertical: 12,
      backgroundColor: "#00008B",
      marginHorizontal: "5%",
      marginBottom:50,
    },
    buttonTitle: {
      color: "#fff",
      fontFamily: 'ForumRegular',
      textAlign: "center",
      fontSize: 18,
    }
  });
export default Article;