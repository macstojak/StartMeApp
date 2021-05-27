import React from "react";
import {View, Text, StyleSheet} from "react-native";
import moment from "moment";

const Weather = ({weather}) =>{
    return(
      <View>
      <Text style={styles.sectionDescription}>Weather:</Text>
      <Text style={styles.sectionDescription}>{weather.main.temp} {'\u00b0'}C, {weather.main.pressure}hPa, {'\u2614'}:{weather.main.humidity}% </Text>
       
      </View>
      
    )
}


const styles = StyleSheet.create({
   
    sectionDescription: {
      marginTop: 8,
      fontSize: 26,
      fontFamily:"ForumRegular",
      color:"white"
    },
  
  });

export default Weather;