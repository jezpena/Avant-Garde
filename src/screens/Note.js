import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import { initialWindowMetrics } from 'react-native-safe-area-context';

export default class Note extends React.Component {
  render(){
    return (
        <View key={this.props.keyval} style={styles.note}>
<Text style={styles.noteText}>{this.props.val.date}</Text>
<Text style={styles.noteText}>{this.props.val.note}</Text>

<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
<Text style={styles.noteDeleteText}>D</Text>
</TouchableOpacity>

</View>
    );
    }
}


const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        backgroundColor: '#fff'
    },
    noteText:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#5dade2',
        
    },
    noteDelete:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5dade2',
        padding: 10,
        top: 10,
        bottom: 10,
        right:50,
    },
    noteDeleteText:{
        color: 'white',
        fontWeight: 'bold',

    }
  });
  