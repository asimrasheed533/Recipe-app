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
import { KeyboardAvoidingView, Platform } from "react-native";
const Stack = createNativeStackNavigator();

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

export default AppNavigation;

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150} // Adjust this offset as needed
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingTop: 20,
            borderRadius: 30,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              return focused ? <HomeIcon /> : <HomeIcon filled />;
            },
          }}
        />
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
    </KeyboardAvoidingView>
  );
}
