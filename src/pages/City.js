import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({cityData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.image}
      >
        <Text style={[styles.city, styles.cityText]}>{cityData.name}</Text>
        <Text style={[styles.country, styles.cityText]}>{cityData.country}</Text>
        <View style={[styles.populationWrapper, styles.alignWrapper]}>
          <IconText
            name={"user"}
            color={"red"}
            style={styles.populationText}
            text={`Population: ${cityData.population}`}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.alignWrapper]}>
          <IconText
            name={"sunrise"}
            color={"white"}
            style={styles.riseSetText}
            text={moment(cityData.sunrise).format('h:mm:ss a')}
          />
          <IconText
            name={"sunset"}
            color={"white"}
            style={styles.riseSetText}
            text={moment(cityData.sunset).format('h:mm:ss a')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  alignWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
