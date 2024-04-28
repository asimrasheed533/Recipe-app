import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
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
  const Categories = [
    "beaf",
    "chicken",
    "mutton",
    "fish",
    "vegitables",
    "burger",
    "burger",
    "burger",
  ];

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
    {
      id: 6,
      title: "vegitables burger",
    },
    {
      id: 7,
      title: "vegitables pizza",
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} className="pt-10 mx-4">
        <View className=" flex-row justify-between items-start">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp("5"), width: wp("10") }}
          />
          <View className="bg-slate-100 ">
            <NotificationIcon />
          </View>
        </View>
        <View>
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
        <View className=" mt-7 flex-row items-center rounded-full  bg-black/5 px-3 ">
          <TextInput
            placeholder="Search recipe"
            placeholderTextColor="gray"
            className="flex-1 text-xs tracking-wider py-2"
          />
          <TouchableOpacity className="bg-white rounded-full p-2">
            <SearchIcon />
          </TouchableOpacity>
        </View>
        {/* categories scroller setion here */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-8 space-x-4"
        >
          {Categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
            >
              <View className="rounded-full">
                <Image
                  className="rounded-full h-12 w-12"
                  source={require("../../assets/images/avatar.png")}
                />
              </View>
              <Text className="text-center text-neutral-500 text-[10px]">
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* // recipy card here */}
        <View className="w-full mb-12">
          <View className="space-y-3">
            <Text className="font-bold text-neutral-700 text-2xl">Recipes</Text>
          </View>
          <View className="px-4 mt-3">
            <FlatList
              scrollEnabled={false}
              data={recipes}
              renderItem={({ item }) => <RecipyCardOne recipie={item} />}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ListEmptyComponent={() => <Text>no data</Text>}
              ItemSeparatorComponent={() => <View className="h-3" />}
              columnWrapperStyle={{ justifyContent: "space-between" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
