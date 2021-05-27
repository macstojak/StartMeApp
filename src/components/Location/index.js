import React, {useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import moment from "moment";

const Location = ({location}) =>{

    return(
        <View>
         <Text style={styles.sectionDescription}>
            Current datetime: {moment(location.timestamp).format("DD.MM.YYYY HH:MM")}</Text>
            <Text style={styles.sectionDescription}>Coordinates: </Text>
            <Text style={styles.sectionDescription}>latitude: {location.latitude}, longitude: {location.longitude}, altitude: {location.altitude} </Text>
            
            </View>
    )
}


const styles = StyleSheet.create({
  map:{
    flex:1,
    width:200,
    height:100,
  },
    sectionDescription: {
      marginTop: 8,
      fontSize: 26,
      fontFamily:"ForumRegular",
      color:"white"
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Location;