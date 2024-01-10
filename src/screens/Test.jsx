import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RecipyCardOne from "../components/RacipyCardOne";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  BellIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Test() {
  const Categories = ["beaf", "chicken", "mutton", "fish", "vegitables"];
  const [heartColor, setHeartColor] = useState("white"); // Initial color

  const toggleHeartColor = () => {
    const newColor = heartColor === "white" ? "red" : "white"; // Toggle between white and red
    setHeartColor(newColor);
  };

  const recipes = [
    {
      id: 1,
      title: "beef burger",
    },
    {
      id: 2,
      title: "chicken burger",
    },
    {
      id: 3,
      title: "mutton burger",
    },
    {
      id: 4,
      title: "fish burger",
    },
    {
      id: 5,
      title: "vegitables burger",
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} className="pt-10">
        <View className="mx-4 flex-row justify-between items-start">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp("5"), width: wp("10") }}
          />
          <BellIcon size={hp("5")} color="gray" />
        </View>
        <View className="mx-4">
          <Text
            style={{
              fontSize: hp(2),
              marginTop: hp(4),
            }}
          >
            Hello Arslan26!
          </Text>
          <View className="mt-10">
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="text-amber-400">Home</Text>
          </Text>
        </View>
        <View className="mx-4 mt-7 flex-row items-center rounded-full p-[6px]  bg-black/5 px-4">
          <TextInput
            placeholder="Search recipe"
            // style={{ fontSize: hp(1.7) }}
            placeholderTextColor="gray"
            className="flex-1 mb-1 tracking-wider py-2 "
          />
          <TouchableOpacity className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>
        {/* categories scroller setion here */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-8 space-x-4 px-4"
        >
          {Categories.map((category, index) => {
            return (
              <TouchableOpacity
                className="
          flex items-center space-y-1"
              >
                <View className="rounded-full">
                  <Image
                    className="rounded-full"
                    style={{
                      height: hp(8),
                      width: wp(16),
                    }}
                    source={require("../../assets/images/avatar.png")}
                  />
                </View>
                <Text
                  style={{
                    fontSize: hp(1.6),
                  }}
                  className="text-center text-neutral-500"
                >
                  burger
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* // recipy card here */}
        <View className="w-full mb-12">
          <View className="space-y-3 mx-4">
            <Text
              style={{
                fontSize: hp(3),
              }}
              className="font-semibold text-neutral-700"
            >
              Recipes
            </Text>
          </View>
          <View
            style={{
              width: wp(100),
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: 16,
            }}
          >
            {recipes.map((recipie) => (
              <RecipyCardOne recipie={recipie} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
