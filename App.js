import React, {useState, useEffect} from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if(weather&&weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

  
  return (
    <View style={styles.container}>
      {loading?
      <ActivityIndicator
        size={'large'}
        color={'blue'}
      />:
      <ErrorItem/>
      }
    </View>
  )
 
  
  
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})