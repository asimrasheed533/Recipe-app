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
    {
      name: "Shakshuka",
      image:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    },
    {
      name: "Beef ",
      image:
        "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    },
    {
      name: "Chickpea Fajitas",
      image:
        "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    },
    {
      name: "Smoky",
      image:
        "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
    },
    {
      name: "Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    },
    {
      name: "Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    },
    {
      name: "Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    },
  ];

  const recipes = [
    {
      name: "Shakshuka",
      image:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    },
    {
      name: "Beef Banh Mi Bowls with Sriracha Mayo",
      image:
        "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    },
    {
      name: "Chickpea Fajitas",
      image:
        "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    },
    {
      name: "Smoky Lentil Chili with Squash",
      image:
        "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
    },
    {
      name: "Braised Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
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
        <View className=" mt-7 py-2 flex-row items-center rounded-full  bg-black/5 px-3 ">
          <TextInput
            placeholder="Search recipe"
            placeholderTextColor="gray"
            className="flex-1 text-xs tracking-wider py-1"
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
                  source={{ uri: category.image }}
                />
              </View>
              <Text className="text-center text-neutral-500 text-[10px]">
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* // recipy card here */}
        <View className="w-full mb-12">
          <View className="space-y-3">
            <Text className="font-bold text-neutral-700 text-2xl">Recipes</Text>
          </View>
          <View className=" mt-3 mb-16">
            <FlatList
              scrollEnabled={false}
              data={recipes}
              renderItem={({ item }) => <RecipyCardOne recipe={item} />}
              keyExtractor={(item) => item.name}
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