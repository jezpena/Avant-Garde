import React from 'react';
import { StyleSheet, Text, View, Image , ImageBackground, TouchableOpacity, Button } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import Transaction from './Transaction';

export default class App extends React.Component {

  Show1=()=>
  {
    alert("Mama mo buntis may abs");
  }

  render(){
    return (
      <View style={styles.container}>
      <ImageBackground
          style={styles.bgImage}
          source={require("../images/bg3.jpg")}>
        <Image 
           style={styles.PerImg}
             source={require("../images/avatar5.jpg")}>
       </Image>
       <Text style={styles.text}>Jeremy Lopez Teoxon</Text>
       
       <View style={styles.buttoncontainer}>
       <Button onPress={() => this.props.navigation.navigate("Transaction")} title= 'Booking Details' color="#5dade2"></Button>
        
        </View>

        <View>

        <View style={styles.con1} >
        <Text style={styles.nav1}>  Name: Teoxon, Jeremy L.</Text>
        </View>
        <View style={styles.con2} >
        <Text style={styles.nav1}>  Birthday: January 26, 2001</Text>
        </View>
        <View style={styles.con5} >
        <Text style={styles.nav1}>  Age: 19</Text>
        </View>
        <View style={styles.con4} >
        <Text style={styles.nav1}>  Gender: Male</Text>
        </View>
        <View style={styles.con3} >
        <Text style={styles.nav1}>  Address: Guijalo, Caramoan, Cam-Sur</Text>
        </View>
        <View style={styles.con4} >
        <Text style={styles.nav1}>  Contact no: 09302894490</Text>
        </View>
        <View style={styles.con4} >
        <Text style={styles.nav1}>  Email Address: ExampleItem@gmail.com</Text>
        </View>
        <View style={styles.con4} >
        <Text style={styles.nav1}>  Nationality: Filipino</Text>
        </View>
        
        </View>
      </ImageBackground>
    </View>
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
  PerImg: {
    marginLeft:140,
    marginBottom:20,
    borderRadius:300,
    width: 150,
    height: 150,
    marginTop: 125,
  },
  bgImage: {
    width: 430,
    height: 900,
  },
  text: {
    marginTop:10,
    alignItems: 'center',
    marginLeft: 90,
    fontSize: 25,
  },

  buttoncontainer:{
    width:"75%",
    backgroundColor:"#5dade2",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    fontWeight:"bold",
    color:"black",
    marginLeft: 55,
  },
  nav:{
    marginTop:10,
    color:"black",
    fontSize:18,
    marginLeft: 160,
  },
  con1: {
    borderRadius:20,
    width:"80%",
    backgroundColor:"#fff",
    height: 40,
    marginBottom:15,
    marginBottom:15,
    marginTop: 20,
    marginLeft: 38,
  },
  con2: {
    borderRadius:20,
    width:"80%",
    backgroundColor:"#fff",
    height: 40,
    marginBottom:15,
    marginBottom:15,
    marginLeft: 38,
  },
  con3: {
    borderRadius:20,
    width:"80%",
    backgroundColor:"#fff",
    height: 40,
    marginBottom:15,
    marginBottom:15,
    marginLeft: 38,
  },
  con4: {
    borderRadius:20,
    width:"80%",
    backgroundColor:"#fff",
    height: 40,
    marginBottom:15,
    marginBottom:15,
    marginLeft: 38,
  },
  con5: {
    borderRadius:20,
    width:"80%",
    backgroundColor:"#fff",
    height: 40,
    marginBottom:15,
    marginBottom:15,
    marginLeft: 38,
  },
  nav1:{
    fontWeight:"bold",
    marginTop:6,
    color:"black",
    fontSize:15,
  },
});