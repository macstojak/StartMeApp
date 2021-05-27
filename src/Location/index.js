import RNLocation from "react-native-location";
RNLocation.configure({
    distanceFilter: 10,
    desiredAccuracy: {
    ios: "best",
    android: "balancedPowerAccuracy"
    },
  // Android only
    androidProvider: "auto",
    interval: 150000, // Milliseconds
    fastestInterval: 100000, // Milliseconds
    maxWaitTime: 5000, // Milliseconds
    })

const Location = () =>{
  let locationSubscription;
 
}

export default Location;