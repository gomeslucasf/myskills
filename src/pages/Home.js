import React from "react";
import {
    View, Text, 
    StyleSheet,SafeAreaView,
    TextInput,
    TouchableOpacity} 
    from 'react-native';

export function Home()
{
  return (
    <SafeAreaView
    style={styles.container}
    >
      <Text style={styles.title}>
        Bem Vindo Lucas!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
              Add
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#121015",
        paddingHorizontal:20,
        paddingVertical: 30
    },
    title:{
        color:"#fff",
        fontSize:24,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor:'#1f1e25',
        color:'#FFF',
        fontSize: 18,
        padding: 15,
        marginTop:30,
        borderRadius:8,
    },
    button:{
        backgroundColor:"#a370f7",
        padding: 15,
        borderRadius:8,
        marginTop: 5,
        alignItems:"center"
    },
    buttonText:{
        color:"#fff"
    }

})