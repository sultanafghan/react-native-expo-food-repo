import React,{useEffect, useState} from "react";
import {View,Text,StyleSheet,Image, FlatList} from 'react-native'
import yelp from "../api/yelp";


const ResultsShowScreen =({navigation})=>{

    const [result,setResult] = useState(null)

   const id= navigation.getParam('id');
   
   const getResult = async(id)=>{
     const response =  await yelp.get(`/${id}`);
     setResult(response.data)
   }
    
   useEffect(()=>{
    getResult(id)
   },[])

   if (!result) {
       return null;
   }
    return<>
        <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={(item)=>{
                return <Image style={styles.image} source={{uri:item.item}}/>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    image:{
        width:200,
        height:300
    }

})
export default ResultsShowScreen;