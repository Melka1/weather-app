import CurrentWeather from "../pages/CurrentWeather";
import UpcomingWeather from "../pages/UpcomingWeather";
import City from "../pages/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
  console.log(weather)
  return (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray',
      tabBarStyle:{
        backgroundColor:'lightblue',
      },
      headerStyle:{
        backgroundColor:'lightblue'
      },
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'tomato'
      }
    }}
  >
    <Tab.Screen
      name="Current"
      options={{
        tabBarIcon:({focused})=>(
          <Feather name="droplet" size={25} color={focused?'tomato':'black'}/>
        )
      }}
    >
      {()=><CurrentWeather weatherData={weather.list[0]} />}
    </Tab.Screen>
    <Tab.Screen
      name="Upcoming"
      options={{
        tabBarIcon:({focused})=>(
          <Feather name="clock" size={25} color={focused?'tomato':'black'}/>
        )
      }}
    >
      {()=><UpcomingWeather weatherData={weather.list} />}
    </Tab.Screen>
    <Tab.Screen
      name='City'
      options={{
        tabBarIcon:({focused})=>(
          <Feather name="home" size={25} color={focused?'tomato':'black'}/>
        )
      }}
    >
      {()=><City cityData={weather.city} />}
    </Tab.Screen> 
  </Tab.Navigator>
)}

export default Tabs