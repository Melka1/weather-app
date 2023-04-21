import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'

const Data = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main:{
      temp_max:8.55,
      temp_min:7.55
    },
    weather:[
      {
        main:'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main:{
      temp_max:8.55,
      temp_min:7.55
    },
    weather:[
      {
        main:'Clouds'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main:{
      temp_max:8.55,
      temp_min:7.55
    },
    weather:[
      {
        main:'Rain'
      }
    ]
  }
]

const Item = (props) => {
  const {dt_txt, min, max, condition} = props
  return (
    <View style={styles.item} >
      <Feather name={'sun'} size={50} color={'black'}/>
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}

const Empty = () => (
  <View>
    <Text>Empty</Text>
  </View>
)

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item
      
      condition={item.weather[0].main} 
      dt_txt={item.dt_txt}
      min = {item.main.temp_min}
      max = {item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/cloud.jpg')}
        style={styles.image}
      >
        <Text>UpcomingWeather</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item)=>item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:StatusBar.currentHeight || 0,
    backgroundColor:'red'
  },
  item : {
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:5,
    backgroundColor:'pink'
  },
  temp : {
    color:'white',
    fontSize:20
  },
  date : {
    color:'white',
    fontSize:15
  },
  image:{
    flex:1
  }
})