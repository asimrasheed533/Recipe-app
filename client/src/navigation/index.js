import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Favourite from "../screens/Favourite";
import Home from "../screens/Home";
import Login from "../screens/Login";
import HomeIcon from "../../assets/HomeIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RecipeDetail from "../screens/RecipeDetail";
import FavouriteIcon from "../../assets/FavouriteIcon";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { KeyboardAvoidingView, Platform } from "react-native";
import Profile from "../screens/Profile";
import ContactUs from "../screens/ContactUs";
import Forgot from "../screens/Forgot";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Forgot" component={Forgot} />
        
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{
            presentation: "fullScreenModal",
            headerTitleStyle: {
              color: "#FF785B",
              fontSize: 20,
              alignSelf: "flex-end",
            },
            headerStyle: {
              width: wp("100%"),
              backgroundColor: "red",
              elevation: 5,
              shadowOpacity: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          marginBottom: 20,
          borderRadius: 20,
          height: 60,
          paddingTop: 25,
          marginHorizontal: 10,
          backgroundColor: "#FF785B",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            return focused ? <HomeIcon /> : <HomeIcon filled />;
          },
        }}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            return focused ? <FavouriteIcon /> : <FavouriteIcon filled />;
          },
        }}
      />
  
    </Tab.Navigator>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={Home} /> 
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
}

export default AppNavigation;
