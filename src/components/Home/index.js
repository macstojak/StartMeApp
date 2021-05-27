import React, {useState, useEffect} from "react";
import { Button,
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    View,
    ActivityIndicator,
} from "react-native";
import axios from "axios";
import Weather from "../Weather";
import Location from "../Location";

const Home = ({navigation}) =>{
    const [weather, setWeather] = useState({main:{temp:0, pressure:0, humidity:0, weather:{}}});
  
  const getWeather =async () =>{
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/find',
      params: {q: 'lapy', units:"metric"},
      headers: {
        'x-rapidapi-key': '101a24371cmshc778d65e8fd6e4fp15b6e6jsna96b7636f1eb',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    };
    
   axios(options).then(response =>{
      setWeather(response.data.list[0]);
    });
  }
  
  
  
  useEffect(()=>{
    
      getWeather();
  },[]);
  
    return(
     
        <ImageBackground source={require("../../images/abstract2.jpg")} style={styles.image}>
        <View style={styles.sectionContainer}>
          
          <Text style={styles.sectionTitle}>Welcome back!</Text> 
          <Image style={styles.avatar} source={require("../../images/logo.png")}></Image>
          <Weather weather={weather} styles={styles.sectionDescription}></Weather>
          
        </View>
        </ImageBackground>   
  
    
    )
    

}


const styles = StyleSheet.create({
    gradient:{
      flex:1
    },
    image:{
      flex:1,
      resizeMode:"cover"
    },
    avatar:{
      marginTop: 5,
      flex: 1,
      resizeMode: "contain",
      width: 300,
      height: 200,
      marginHorizontal: "5%"
    },
      sectionLogo: {
      fontSize: 60,
      color:"white",
      textAlign:"center"
    },
    sectionContainer: {
      marginTop: 32,
      paddingBottom:32,
      paddingHorizontal: 24,
      backgroundColor: "rgba(0,0,255,0.5)",
      color:"white"
    },
    sectionTitle: {
      marginTop:5,
      fontSize: 45,
      fontFamily:"PoiretOne-Regular",
      color:"white",
      textAlign:"center"
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color:"white"
    },
  
  });
export default Home;