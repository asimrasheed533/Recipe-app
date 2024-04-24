import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import { HeartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import FavouriteIcon from "../../assets/FavouriteIcon";
// import { useDispatch, useSelector } from "react-redux";

export default function RacipyCardOne({ recipie }) {
  const [heartColor, setHeartColor] = useState("white");
  const toggleHeartColor = () => {
    const newColor = heartColor === "white" ? "red" : "white";
    setHeartColor(newColor);
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeDetail")}
      className="flex justify-center space-y-1 relative w-[48%]"
    >
      <Image
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
        }}
        source={require("../../assets/mbff.webp")}
      />
      <TouchableOpacity
        onPress={toggleHeartColor}
        className="absolute py-4 mx-4 top-0 right-0"
      >
        <FavouriteIcon />
      </TouchableOpacity>

      <View className="absolute bottom-1 left-2 right-2 flex justify-between items-center px-3 py-2 bg-black/50 rounded-2xl">
        <Text className="text-white text-sm">{recipie.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
