import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import Favourite from "../screens/Favourite";
import Test from "../screens/Test";
import Login from "../screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BookmarkIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { Provider } from "react-redux";
import RecipeDetailTest from "../screens/RecipeDetailTest";
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
          name="RecipeDetailTest"
          component={RecipeDetailTest}
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
        component={Test}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" color={color} size={"30"} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => <BookmarkIcon color={color} size={"30"} />,
        }}
      />
    </Tab.Navigator>
  );
}
