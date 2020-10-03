import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard2 from "./ModalCard2";
import ListCard2 from "./ListCard2";
import { ScrollView } from "react-native-gesture-handler";
export default class Bus extends React.Component {
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
        source={require("../images/120569216_381917552967247_6669616870552582405_n.jpg")}
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
            <Icon name="bus" color="white" size={32} />
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
              color: "black",
            }}
          >
            MNL
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "black",
            }}
          >
            CARA
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
              color: "black",
              fontFamily: "RobotoRegular",
              fontWeight: 'bold',
            }}
          >
            MANILA CITY
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "RobotoRegular",
              paddingLeft: 158,
              fontWeight: 'bold',
            }}
          >
            CARAMOAN
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 40,
            color: "black",
            fontFamily: "RobotoRegular",
            fontWeight: 'bold',
          }}
        >
          26 JANUARY, 2021
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
          <ListCard2
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard2
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard2
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
              <ModalCard2
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
