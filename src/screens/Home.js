import React, {useState} from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, StyleSheet,Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/back.jpg")}
        style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          
          <Icon
            onPress={() => this.props.navigation.navigate("pro2icon")}
            name="account-circle"
            size={40}
            color="#273c75"
            style={{ marginLeft: 250 }}
          />
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <Image
              source={require("../images/we.png")}
            />

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              fontFamily: "RobotoRegular",
              color: "#130f40",
            }}
          >
          </Text>

          <View
            style={{
              flexDirection: "row",
              //backgroundColor: "#FFF",
              borderRadius: 3,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <View style={styles.buttoncontainer}>
       <Button onPress={() => this.props.navigation.navigate("TodoApp")} title= 'Go to My To Do List' color="#5dade2"></Button>
        
        </View> 
           {/* <Image
              source={require("../images/a.png")}
              style={{ height: 14, width: 14 }}
            />
            <TextInput
              placeholder="Search"
              style={{ paddingHorizontal: 20, fontSize: 15, color: "#130f40" }}
            /> */}
          </View>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -40, marginTop: 30 }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                marginLeft: 75,
                backgroundColor: "#273c75",
              }}
            >
            <Image
              source={require("../images/travel.png")}
              style={{ height: 33, width: 33 }}
            />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Bus")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                marginLeft: 20,
                backgroundColor: "#273c75",
              }}
            >
              <Icon name="bus" color="white" size={32} />
              </TouchableOpacity> 

          </ScrollView>


          <Image
              source={require("../images/top5.png")}
              style={{ height: 30, width: "100%",marginTop:30, }}
            />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <View
              style={{
                marginLeft:5,
                marginRight:20,
                backgroundColor: "#f1f2f6",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/Caramoan.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#006266",
                    }}
                  >
                    Caramoan Island is located in the lower eastern part of Camarines Sur in the Bicol region of the Philippine.
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#1abc9c" />
              </View>
            </View>

            <View
              style={{
                marginRight:20,
                backgroundColor: "#f1f2f6",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/bohol.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#006266",
                    }}
                  >
                    Bohol is a province of the Philippines, in the country’s Central Visayas region. It comprises Bohol Island and numerous smaller surrounding islands.
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#d35400" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/puerto.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#006266",
                    }}
                  >
                    The Puerto Princesa Subterranean River National Park is a protected area of the Philippines.
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#f1f2f6",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../images/batanes.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#006266",
                    }}
                  >
                    Batanes is an archipelagic province in the Philippines situated in the Cagayan Valley region.
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#5facdb" />
              </View>
            </View>

            <View
              style={{
                marginRight:5,
                backgroundColor: "#f1f2f6",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/boracay.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#006266",
                    }}
                  >
                    Boracay is a small island in the central Philippines. It's known for its resorts and beaches.
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#bb32fe" />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles =StyleSheet.create({
  buttoncontainer:{
    width:"100%",
    backgroundColor:"#5dade2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    fontWeight:"bold",
    color:"black",
   
  },
});
