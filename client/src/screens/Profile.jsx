import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Touchable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { setUser } = useUser();
  const navigation = useNavigation();
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <View className="px-12 ">
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "red",
          }}
          className="w-full mt-10 items-center py-4 rounded-full"
        >
          <Text className="text-white text-sm font-semibold	">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
