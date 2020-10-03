import React from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export default class App extends React.Component {

  Show1=()=>
  {
    alert("Mama mo buntis may abs");
  }

  render(){
    return (
      <View style={styles.container}>
        
           <Image style={styles.logo}  source={require('../images/AGLogo.png')} />
           
        <View style={styles.inputView} >
          <Image style ={styles.imageContainer}
            source={require('../images/pp.gif')}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot} onPress={() => this.props.navigation.navigate("Profile1")}>ABOUT US</Text>
        </TouchableOpacity>

        <View style={styles.loginBtn}>
          <Button onPress={() => this.props.navigation.navigate("Home")} title= 'LETS GO !' color="#fb5b5a"></Button>
        </View>

  
        </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227093',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    width: 350,
    height: 350,
    marginBottom:150,
  },


  inputView:{
    width:-1,
    height:5,
    marginTop:250,
    justifyContent:"center",
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    fontWeight:"bold",
    marginTop:130,
    color:"white",
    fontSize:18,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    fontWeight:"bold",
    color:"white"
    
  },
  loginText:{
    fontWeight:"bold",
    color:"white"
  }
});
