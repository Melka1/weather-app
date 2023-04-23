import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import Item from "../components/ListItem";

const Empty = () => (
  <View>
    <Text>Empty</Text>
  </View>
);

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/cloud.jpg")}
        style={styles.image}
      >
        <Text>UpcomingWeather</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
  },
});
