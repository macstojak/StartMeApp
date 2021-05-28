import React,{useState, useEffect} from "react";
import {View, TouchableOpacity, TouchableHighlight, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native";
var Sound = require("react-native-sound")

const Fun = () =>{

const keys = [
  {note:"C", path: new Sound("gs1.mp3"), direction:"down"},
  {note:"C#", path: new Sound("a1.mp3"), direction:"up"},
  {note:"D", path: new Sound("as1.mp3"), direction:"down"},
  {note:"E", path: new Sound("b1.mp3"), direction:"down"},
  {note:"E#",  path: new Sound("c2.mp3"), direction:"up"}, 
  {note:"F", path: new Sound("cs2.mp3"), direction:"down"}, 
  {note:"F#",  path: new Sound("d2.mp3"), direction:"up"}, 
  {note:"G", path: new Sound("ds2.mp3"), direction:"down"},  
  {note:"E#",  path: new Sound("e2.mp3"), direction:"up"}, 
  {note:"H2", path: new Sound("f2.mp3"), direction:"down"}, 
  {note:"H#",  path: new Sound("fs2.mp3"), direction:"up"}, 
  {note:"E",  path: new Sound("g2.mp3"), direction:"down"}, 
 
];

          const playNote=(note, path)=>{
            path.play();
            setTimeout(()=>{
              path.stop()
            }, 200)
          }
          const Item = ({ note, path, direction }) => (
            <View style={direction==="up"?styles.itemUp:styles.itemDown}>
              <TouchableHighlight
                style={styles.button}
                onPress={()=>playNote(note,path)}
              ><Text style={direction==="up"?styles.textWhite:styles.textBlack}>{note}</Text></TouchableHighlight>
            </View>
          );
        
          const renderItem = ({ item }) => (
            <Item
              note={item.note}
              path={item.path}
              direction={item.direction}
            />
          );


    return(
        <View style={{backgroundColor:"white"}}>
        {!keys ? (
          <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
        ) : (
          <FlatList style={{flexGrow:1}} data={keys} renderItem={renderItem} keyExtractor={(item, index) => index}></FlatList>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    itemUp:{
      borderColor:"white",
      borderStyle:"solid",
      borderWidth:2,
      marginLeft:120,
      backgroundColor:"black",

    },
    textBlack:{
      color:"black",   
    marginTop: 5,
    marginRight:150,
    fontSize: 35,
    fontFamily: 'PoiretOne-Regular',
    color: 'white',
    textAlign: 'center',
    transform: [{ rotate: '90deg'}]},
    textWhite:{
      color:"white",   marginTop: 5,
      marginRight:150,
      fontSize: 35,
      fontFamily: 'PoiretOne-Regular',
      color: 'white',
      textAlign: 'center',
      transform: [{ rotate: '90deg'}]},
    itemDown:{
      borderColor:"white",
      borderStyle:"solid",
      borderWidth:2,
      color: "black",
      borderColor:"#00008B"
    },
    button: {
        flex: 1,
        
        marginHorizontal: "5%",
        borderColor:"white",
        borderRadius:5,
        borderStyle:"solid"
      },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
   
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'white',
    },
  });
export default Fun;