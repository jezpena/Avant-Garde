import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";
export default class Detail extends React.Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <ImageBackground
        source={require("../images/83216025_561371617842084_8983852183971401240_n.jpg")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            width: "100%",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/travel.png")}
              style={{ height: 33, width: 33 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            MNL
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#FFF",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            CEB
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoRegular",
              fontWeight: 'bold',
              fontSize: 19,
              
             
            }}
          >
            MANILA
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoRegular",
              paddingLeft: 160,
              fontWeight: 'bold',
              fontSize: 19,
            
            }}
          >
            CEBU
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 40,
            color: "#FFF",
            fontFamily: "RobotoRegular",
            fontWeight:'bold',
            fontSize: 15,
          }}
        >
          26 January, 2021
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
          <Image
            source={require("../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../images/filter.png")}
            style={{ marginLeft: 228, width: 20, height: 18 }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
          }}
        >
          <ListCard
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard
            onPress={() => {
              this.setModalVisible(true);
            }}
          />

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal is closed");
              }}
            >
              <ModalCard
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              />
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
