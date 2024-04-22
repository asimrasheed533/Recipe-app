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
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NotificationIcon from "../../assets/NotificationIcon";
import SearchIcon from "../../assets/SearchIcon";

export default function Home() {
  const Categories = ["beaf", "chicken", "mutton", "fish", "vegitables"];

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
          <View className="bg-slate-100 ">
            <NotificationIcon />
          </View>
        </View>
        <View className="mx-4">
          <Text className="font-medium text-sm text-neutral-700 mt-2">
            Hello Arslan26!
          </Text>
          <View className="mt-3">
            <Text className="font-semibold text-neutral-600 text-xl">
              Make your own food,
            </Text>
          </View>
          <Text className="font-semibold text-neutral-600 text-3xl">
            stay at <Text className="text-amber-400">Home</Text>
          </Text>
        </View>
        <View className="mx-4 mt-7 flex-row items-center rounded-full p-[6px]  bg-black/5 px-4 ">
          <TextInput
            placeholder="Search recipe"
            placeholderTextColor="gray"
            className="flex-1 mb-1 tracking-wider py-2 "
          />
          <TouchableOpacity className="bg-white rounded-full p-3">
            <SearchIcon />
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
                <Text className="text-center text-neutral-500 text-sm">
                  burger
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* // recipy card here */}
        <View className="w-full mb-12">
          <View className="space-y-3 mx-4">
            <Text className="font-semibold text-neutral-700 text-2xl">
              Recipes
            </Text>
          </View>
          <View className="w-full flex flex-row flex-wrap justify-between px-4 mt-3">
            {recipes.map((recipie) => (
              <RecipyCardOne recipie={recipie} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
