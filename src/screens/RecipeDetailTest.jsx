import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import YouTubeIframe from "react-native-youtube-iframe";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function RecipeDetailTest() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* back button */}
        <Animated.View
          entering={FadeIn.delay(200).duration(1000)}
          className="w-full absolute flex-row justify-between items-center pt-10"
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full ml-5 red"
          >
            <ChevronLeftIcon size={hp(3.5)} strokeWidth={4} color="#fbbf24" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: hp(2.5),
                color: "black",

                fontWeight: "600",
                marginRight: wp(8),
              }}
            >
              Recipe Detail
            </Text>
          </View>
        </Animated.View>
        <View
          style={{
            borderRadius: 25,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            marginTop: hp(10),
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, // For Android shadow
            padding: 10,
            margin: 10,
          }}
        >
          <YouTubeIframe
            webViewProps={{
              overScrollMode: "never", // a fix for webview on android - which didn't work :(
            }}
            videoId={"1UM1oGnLsZE"}
            height={hp(28)}
          />
        </View>
        <View className="px-6">
          <Text
            style={{
              fontSize: hp(4),
              color: "black",
              lineHeight: hp(5),
              fontWeight: "700",
            }}
          >
            Octopus with citrus salad & herbs
          </Text>
        </View>
        <View className="px-6">
          <Text
            style={{
              fontSize: hp(2.2),
              color: "black",
              marginTop: hp(2),
              fontWeight: "500",
            }}
          >
            Sem aliquet sit urna aliquam vitae nisl convallis ac, tristique. Nec
            lectus eget feugiat ornare.
          </Text>
        </View>
        <View className="px-6">
          <Text
            style={{
              fontSize: hp(2.5),
              color: "black",
              marginTop: hp(2),
              lineHeight: hp(5),
              fontWeight: "700",
            }}
          >
            Ingredients
          </Text>
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
      className="px-6 mx-4 mt-4 flex-row justify-center items-center rounded-3xl"
    >
      <View className="p-2 ">
        <Image
          source={require("../../assets/mbff.webp")}
          className="h-14 w-14 rounded-full"
        />
      </View>
      <View className="p-4">
        <View>
          <Text
            style={{
              fontSize: hp(2.5),
              fontWeight: "700",
              paddingBottom: hp(1),
            }}
          >
            30g
          </Text>
        </View>
        <View className="overflow-hidden">
          <Text>
            Laoreet eget tristique nullam vel at sagittis. In lobortis
            fermentum.
          </Text>
        </View>
      </View>
    </View>
  );
}
