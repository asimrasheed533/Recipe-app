import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import YouTubeIframe from "react-native-youtube-iframe";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../assets/BackIcon";
export default function RecipeDetail() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" bg-slate-200 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View
          entering={FadeIn.delay(200).duration(1000)}
          className=" my-3 flex-row justify-between items-start "
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full red"
          >
            <BackIcon />
          </TouchableOpacity>

          <Text className="text-sm font-semibold text-black">
            Recipe Detail
          </Text>
        </Animated.View>

        <View
          style={{
            borderRadius: 16,
            backgroundColor: "#ffffff",
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 3.84,
            elevation: 5, // For Android shadow
            padding: 10,
          }}
        >
          <YouTubeIframe
            webViewProps={{
              overScrollMode: "never", // a fix for webview on android - which didn't work :(
            }}
            videoId={"1UM1oGnLsZE"}
            height={160}
          />
        </View>
        <View>
          <Text className="text-xl font-bold mt-4  text-black  ">
            Octopus with citrus salad & herbs
          </Text>
        </View>
        <View>
          <Text className="text-xs text-neutral-700 ">
            Sem aliquet sit urna aliquam vitae nisl convallis ac, tristique. Nec
            lectus eget feugiat ornare.
          </Text>
        </View>
        <View>
          <Text className="text-xl font-semibold mt-4">Ingredients</Text>
        </View>

        <IngredientsCard />
        <IngredientsCard />
        <IngredientsCard />
        <IngredientsCard />
        <IngredientsCard />
      </ScrollView>
    </SafeAreaView>
  );
}

function IngredientsCard() {
  return (
    <View
      style={{
        backgroundColor: "#F1F3F5",
      }}
      className="px-6 mt-4 flex-row justify-center items-center rounded-xl"
    >
      <View className="p-2 ">
        <Image
          source={require("../../assets/mbff.webp")}
          className="h-14 w-14 rounded-full"
        />
      </View>
      <View className="p-4">
        <View>
          <Text className="text-base font-semibold text-black">30g</Text>
        </View>
        <View className="overflow-hidden">
          <Text className="text-xs">
            Laoreet eget tristique nullam vel at sagittis. In lobortis
            fermentum.
          </Text>
        </View>
      </View>
    </View>
  );
}
