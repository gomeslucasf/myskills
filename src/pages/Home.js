import React,{useState} from "react";
import {
    Text, 
    StyleSheet,SafeAreaView,
    TextInput
} from 'react-native';
import { Button } from "../components/Button";
import { CardSkill } from "../components/CardSkill";

export function Home()
{
  const [newSkill,setNewSkill] = useState('');
  const [mySkills,setMySkills] = useState([]);

  function handleAddNewSkill(){
      if(mySkills.indexOf(newSkill) == -1 )
        setMySkills(oldState=>[...oldState, newSkill]);

  }
  
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
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill}/>
      <Text 
        style={[styles.title,{marginVertical:50}]}
      >
        My Skills
      </Text>
     {
       mySkills.map(skill=>(
          <CardSkill skill={skill}/>
       ))      
     }    

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
    }
})