import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Profile from '../screens/Profile';

const slides = [
  {
    key: "one",
    title: "ESTRAVO, ANGEL",
    text:
      "LAYOUT AND DESIGN",
    image: require("../images/ang.jpg"),
  },

  {
    key: "two",
    title: "JEZREEL, PENA",
    text:
      "DESIGNER AND REPORTER",
    image: require("../images/jez.jpg"),
  },
  
  {
    key: "three",
    title: "TEOXON, JEREMY L.",
    text:
      "DEVELOPER AND DESIGNER",
    image: require("../images/jeremy.jpg"),
  },
];

export default class App extends React.Component {
  state = { Profile: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: '#227093' }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: '#ffffff',
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign:"center",
          color:"black",
          fontSize:15,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
      
    );
  };

  render() {
    if (this.state.Profile){
      return <App/>
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
      data={slides} 
      activeDotStyle={{
        backgroundColor:"#ffffff",
        width:20
      }}
     />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
