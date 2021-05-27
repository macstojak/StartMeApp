import React from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import {v4 as uuidv4} from "uuid";
import MapView, {Marker} from 'react-native-maps';

const CustomMarker = ({marker, index})=>{
  return(
    <Marker
    
            coordinate={{longitude:marker.geometry.location.lng, latitude:marker.geometry.location.lat}}
            title={marker.name}
            description={marker.formatted_address}
            pinColor="blue"
          >
          </Marker>
  )
}
const MultipleMarkers = ({markers, markerRegion}) =>{
     return (
 
          markers&&markers.length>0
          ? (
     
          markers.map((el, i)=>{
            return <CustomMarker key={`${Math.random(100000).toString()}`} marker={el} index={i}></CustomMarker>
          })
            )
          :
        <Marker
         
         coordinate={markerRegion}
         title="Current position"
         description={`Here you are! Time to move.`}
       />
       
         
      
     )
}
const Map = ({markers}) => {
 
  return (
   
   markerRegion ? (
     <MapView 
    showsUsersLocation={true}
    followsUserLocation={true}
    loadingEnabled={true}
     style={styles.map} region={markerRegion}>
     <MultipleMarkers markerRegion={markerRegion} markers={markers}></MultipleMarkers></MapView>
      ) : (markers&&markers.length===1?(
       <Marker
         key={`${Math.random(100000).toString()}`}
         coordinate={markerRegion}
         title="Current position"
         description={`Here you are! Time to move.`}
       />):(
        <View>
          <ActivityIndicator
            size="large"
            color="rgba(0,0,255,0.7)"></ActivityIndicator>
          <Text style={styles.description}>No gps data provided</Text>
        </View>
       )
      )
   
      
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height:100
  },
  input: {
    backgroundColor: 'rgba(0,0,255,0.7)',
    fontSize: 26,
    fontFamily: 'ForumRegular',
    color:"rgba(255,255,255,1)"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 26,
    fontFamily: 'ForumRegular',
    color: 'white',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Map;
