import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
export default function Favourite() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* back button */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-10"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 red"
        >
          {/* <ChevronLeftIcon size={hp(3.5)} strokeWidth={4} color="#fbbf24" /> */}
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
            Favourite
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
