import 'react-native-gesture-handler';
import React from 'react';
import Home from "./src/components/Home";
import News from "./src/components/News";
import Article from "./src/components/Article";
import MapWrapper from "./src/components/MapWrapper";
import Fun from "./src/components/Fun";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from 'react-native-screens';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

enableScreens();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const MapsStack = createStackNavigator();
const FunStack = createStackNavigator();
const LoginStack = createStackNavigator();

const HomeStackScreen = () =>{

  const [isSignedIn, setIsSignedIn] = useState(false);

   return(
   <HomeStack.Navigator
    initialRouteName={Home}
     screenOptions={{
        headerStyle: {
            backgroundColor: '#00008B',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontFamily:"ForumRegular"
          },
      
      }}>
      <HomeStack.Screen name="Home" component={Home}
      ></HomeStack.Screen>
      <HomeStack.Screen name="News" component={News}
      ></HomeStack.Screen>
       <HomeStack.Screen name="Maps" title="Maps" component={MapWrapper} />
    </HomeStack.Navigator>
   )}
const NewsStackScreen = () =>{
    return (
    <NewsStack.Navigator
    initialRouteName={News}
     screenOptions={{
        headerStyle: {
            backgroundColor: '#00008B',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontFamily:"ForumRegular"
          },
       
      }}>
      <NewsStack.Screen name="News" component={News}
      ></NewsStack.Screen>
       <NewsStack.Screen name="Article" title="Article" component={Article} />
    </NewsStack.Navigator>
    )}

const MapsStackScreen = () =>{
   return( <MapsStack.Navigator
    initialRouteName={Home}
     screenOptions={{
        headerStyle: {
            backgroundColor: '#00008B',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontFamily:"ForumRegular"
          },
         
      }}>
    
       <MapsStack.Screen name="Maps" title="Maps" component={MapWrapper} />
    </MapsStack.Navigator>
   )}

   const FunStackScreen = () =>{
    return( <FunStack.Navigator
     initialRouteName={Home}
      screenOptions={{
         headerStyle: {
             backgroundColor: '#00008B',
           },
           headerTintColor: '#fff',
           headerTitleStyle:{
             fontFamily:"ForumRegular"
           },
          
       }}>
     
        <FunStack.Screen name="Fun" title="Fun" component={Fun} />
     </FunStack.Navigator>
    )}

    
const App = () => {
  return(
    <NavigationContainer>
     
    <Tab.Navigator
    initialRouteName="Home"
           tabBarOptions={{
           activeTintColor: '#ff0000',
           inactiveTintColor:"#00008b",
         
         }}>
         
           isSignedIn
           (?
           <Tab.Screen name="Home" component={HomeStackScreen} 
           options={{
             tabBarLabel: 'Home',
             tabBarIcon: ({ color, size }) => (
               <FontAwesomeIcon name="home" size={30} color={color}></FontAwesomeIcon>
             ),
           }}
           />
           <Tab.Screen name="News" component={NewsStackScreen}  options={{
             tabBarLabel: 'News',
             tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="newspaper" size={30} color={color}></FontAwesomeIcon>
             ),
           }}
           />
           <Tab.Screen name="Maps" component={MapsStackScreen}  options={{
             tabBarLabel: 'Maps',
             tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="map" size={30} color={color}></FontAwesomeIcon>
             ),
           }} />
           <Tab.Screen name="Fun" component={FunStackScreen}  options={{
             tabBarLabel: 'Fun',
             tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="itunes-note" size={30} color={color}></FontAwesomeIcon>
             ),
           }}
           />)
           :
           (
            <LoginStack.Screen name="SignIn" component={SignInScreen} />
            <LoginStack.Screen name="SignUp" component={SignUpScreen} />
           )
         </Tab.Navigator>
     


    </NavigationContainer>
    )
};


export default App;
