import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import BackIcon from "../../assets/BackIcon";
import { useNavigation } from "@react-navigation/native";
import OtpSvg from "../../assets/OtpSvg";

export default function OTP() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView className="flex-1 bg-[#FB6D3B]">
        {/* //top screen */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ left: 10, top: 3 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="p-2 rounded-full h-8 w-8  bg-white"
            >
              <BackIcon />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 23,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              OTP Verify
            </Text>
          </View>
        </View>
        {/* //       //bottom screen */}
        <ScrollView
          style={{
            flex: 1, 
            backgroundColor: "#F7F7F7",
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            marginTop: 20,
            padding: 20,
          }}
        >
          <OtpSvg />
          <Text className=" mt-4  text-base font-semibold">Enter Here</Text>
          <View className="mx-6">
            <OTPInputView
            placeholderTextColor="#000"
              codeInputFieldStyle={{ borderRadius: "9px" }}
              style={{ width: "100%", height: 80 }}
              pinCount={4}
            />
          </View>

          <View className="px-12 ">
            <TouchableOpacity
              style={{
                backgroundColor: "#FF785B",
              }}
              className="w-full mt-10 items-center py-4 rounded-full"
            >
              <Text className="text-white text-sm font-semibold">Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
