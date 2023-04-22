import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import {weatherType} from '../utilities/weatherType'


const CurrentWeather = ({weatherData}) => {
  console.log(weatherData)
  const {main:{temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>Fells like {feels_like}</Text>
        <RowText
          message1={`High: ${temp_max}`}
          message2={`Low: ${temp_min}`}
          message1Styles={styles.highLow}
          message2Styles={styles.highLow}
          containerStyle={styles.highLowWrapper}
        />
      </View>
      <RowText
        message1={weather[0].description}
        message2={weatherType[weatherCondition].message}
        message1Styles={styles.description}
        message2Styles={styles.message}
        containerStyle={styles.bodyWrapper}
      />
      
    </SafeAreaView>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 20,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
