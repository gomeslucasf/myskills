import React,{useState,useEffect} from "react";
import {
    Text, 
    StyleSheet,
    View,
    TextInput,
    FlatList
} from 'react-native';
import { Button } from "../components/Button";
import { CardSkill } from "../components/CardSkill";

export function Home()
{
  const [newSkill,setNewSkill] = useState('');
  const [mySkills,setMySkills] = useState(['REACT NATIVE','C#','GIT','ASP.NET','.NET','CORE','REACT','NODEJS']);
  const [gretting,setGretting] = useState('');

  function handleAddNewSkill(){
      if(mySkills.indexOf(newSkill) == -1 )
        setMySkills(oldState=>[...oldState, newSkill]);
  }
  useEffect(()=>{
    const data = new Date().getHours();
    if(data < 12 && data > 5)
    {
      setGretting('Bom dia');
    }else if(data >= 12 && data < 18)
    {
      setGretting('Boa Tarde');
    }else{
      setGretting('Boa Noite');
    }
  },[]);
  return (
    <View
    style={styles.container}
    >
      <Text style={styles.title}>
        {gretting}, Lucas!
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

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <CardSkill skill={item}/>
        )}
      />  

    </View>
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