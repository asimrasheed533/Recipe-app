import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { HeartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
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
      className="flex justify-center space-y-1 relative mb-4 w-[48%]"
    >
      <Image
        style={{
          width: wp("45%"),
          borderRadius: 30,
        }}
        source={require("../../assets/mbff.webp")}
      />
      <TouchableOpacity
        onPress={toggleHeartColor}
        className="absolute py-4 mx-4 top-0 right-0"
      >
        {/* <HeartIcon size={hp("5")} color={heartColor} /> */}
      </TouchableOpacity>

      <View className="absolute bottom-1 left-2 right-2 flex justify-between items-center px-3 py-2 bg-black/50 rounded-2xl">
        <Text
          style={{
            fontSize: hp(2),
            color: "white",
          }}
        >
          {recipie.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
