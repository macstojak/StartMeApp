import React from 'react';
import {Text, ActivityIndicator, View, StyleSheet} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import MapView, {Marker} from 'react-native-maps';



const Map = ({markers}) => {
  return markers && markers.length > 0 ? (
    <MapView
      showsUsersLocation={true}
      followsUserLocation={true}
      loadingEnabled={true}
      style={styles.map}
      region={{ 
        latitude: markers[0].geometry.location.lat,
      longitude: markers[0].geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}>
      {markers.map((el, i) => {
      return (
        <Marker
        key={`${Math.random(100000).toString()}`}
          title={el.name}
          description={el.formatted_address?el.formatted_address:"Use search bar to see interesting places"}
      coordinate={{
        longitude: el.geometry.location.lng,
        latitude: el.geometry.location.lat,
      }}
      pinColor="blue"></Marker>
         
      );
    })}
    </MapView>
  ) : (
    <View>
      <ActivityIndicator
        size="large"
        color="rgba(0,0,255,0.7)"></ActivityIndicator>
      <Text style={styles.description}>No gps data provided</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: 100,
  },
  input: {
    backgroundColor: 'rgba(0,0,255,0.7)',
    fontSize: 26,
    fontFamily: 'ForumRegular',
    color: 'rgba(255,255,255,1)',
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
