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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RecipeDetail from "../screens/RecipeDetail";
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
      
      />
    </Tab.Navigator>
  );
}
