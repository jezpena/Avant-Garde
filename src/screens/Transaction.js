import React from 'react';
import { StyleSheet, Text, View, Image , ImageBackground, ScrollView } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export default class App extends React.Component {

  Show1=()=>
  {
    alert("Mama mo buntis may abs");
  }

  render(){
    return (
      <ScrollView> 
      <View style={styles.container}>
       
          <ImageBackground
             style={styles.bgImage}
             source={require("../images/120456667_338344824260752_4931314437015780964_n.jpg")}>
                <Text style={styles.text}>Hi! I'm Jeremy</Text>
                <Text style={styles.text1}>Joined since 2013</Text>
                <View
                  style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                  marginTop: 15
                }}
                ></View>
                  <Text style={styles.text2}>Past Transactions: </Text>
                  <View style={styles.con1}>
                    <Text style={styles.text3}> 1. Batanes </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: July 19, 2013</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 800 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: August 2, 2013</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 2. Iloilo </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: July 19, 2014</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 1500 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: August 2, 2014</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 3. Hongkong </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: August 21, 2014</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 3500 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: December 2, 2014</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 4. Korea </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: October 5, 2016</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 4500 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: January 19, 2017</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 5. Palawan </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: March 16, 2017</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 1200 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: May 20, 2017</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 6. Cebu </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: April 9, 2018</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 2000 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: June 1, 2018</Text>                         
                </View>
                <View>
                    <Text></Text>
                </View>
                <View style={styles.con1}>
                    <Text style={styles.text3}> 7. Japan </Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Booked: September 21, 2019</Text>
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Price: 5000 php</Text> 
                  </View>
                  <View style={styles.con1}>
                    <Text style={styles.text4}> Arrived: Feruary 27, 2020</Text>                         
                </View>
            </ImageBackground>
        </View>
      </ScrollView>
    );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: 430,
    height: 1500,
  },
  text: {
    marginTop: 100,
    marginLeft: 35,
    fontSize: 30,
  },
  text1: {
    marginTop: 5,
    marginLeft: 38,
    fontSize: 15,
  },
  text2: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 25,
    fontWeight:"bold",
    marginBottom: 40,
  },
  text3: {
    marginTop: 10,
    marginLeft: 50,
    fontSize: 20,
  },
  text4: {
    marginTop: 5,
    marginLeft: 90,
    fontSize: 15,
  },
  con1: {
    borderRadius: 30,
    width:"80%",
    backgroundColor:"#fff",
    height: 35,
    marginLeft: 38,
  },
});
