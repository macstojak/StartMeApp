import {API_KEY} from '@env';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, StyleSheet, Alert} from 'react-native';
import Maps from '../Map';
import RNLocation from 'react-native-location';
import axios from 'axios';
import {useDebounce} from '../../hooks/useDebounce';

RNLocation.configure({
  distanceFilter: 10,
  desiredAccuracy: {
    ios: 'best',
    android: 'balancedPowerAccuracy',
  },
  // Android only
  androidProvider: 'auto',
  interval: 10000, // Milliseconds
  fastestInterval: 100000, // Milliseconds
  maxWaitTime: 5000, // Milliseconds
});

const MapWrapper = () => {
  const [value, setValue] = useState();
  const [location, setLocation] = useState('');
  const [markerRegion, setMarkerRegion] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const debouncedSearchTerm = useDebounce(value, 2000);
  const [markers, setMarkers] = useState([]);

  const getLocation = () => {
    let locationSubscription;
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then(granted => {
      if (granted) {
        try {
          locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
              if (locations.length > 0) {
                let region = [{
                  latitude: parseFloat(locations[0].latitude),
                  longitude: parseFloat(locations[0].longitude),
                  altitude: parseFloat(locations[0].altitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }];
                
                setMarkers(region);
                
              }
            },
          );
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  const getPlaceFromApi = async text => {
    if (text) {
      try {
        let place = await axios.get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${text}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${API_KEY}`,
        );
        return place && place.data.candidates.length > 0
          ? place.data.candidates
          : createAlert();
      } catch (e) {
        console.log(e);
      }
    }
  };
  const getDebouncedSearch = async () => {
    if (debouncedSearchTerm) {
      try {
        const filteredPlaces = await getPlaceFromApi(debouncedSearchTerm);
        filteredPlaces.push({
          name: 'Your position',
          geometry: {
            location: {lat: markers[0].latitude, lng: markers[0].longitude},
          },
        });
        if (filteredPlaces) {
          
          setMarkers(...markers,filteredPlaces);
        } else {
          setValue('');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      setValue('');
    }
  };
  const createAlert = () =>
    Alert.alert(
      'Not found',
      "We haven't found your search query. Try with different name or check for spelling mistakes.",
    );
  useEffect(() => {
    try {
      getDebouncedSearch();
    } catch (e) {
      console.log(e);
    }
  }, [debouncedSearchTerm]);

  useEffect(async () => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Maps markers={markers} ></Maps>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        editable
        maxLength={40}
        placeholder="Search for a place, restaurant ..."
        placeholderTextColor="rgba(255,255,255,1)"></TextInput>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(0,0,255,0.7)',
    width: '100%',
    fontSize: 16,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'ForumRegular',
  },
});

export default MapWrapper;
