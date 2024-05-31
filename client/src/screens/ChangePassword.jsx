import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import BackIcon from "../../assets/BackIcon";
import ForgotSvg from "../../assets/ForgotSvg";
import { useNavigation } from "@react-navigation/native";
import axios from "../utils/axios";
export default function ChangePassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirmPress = async () => {
    setLoading(true);
    try {
      if (!password) {
        setPasswordError("Enter password");
      }
      if (!ConfirmPassword) {
        setConfirmPasswordError("Enter ConfirmPassword");
      }
      if (password && ConfirmPassword) {
        setConfirmPasswordError("Password does not match");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error", "Failed to send OTP");
    }
  };

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
              Change Password
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
          <ForgotSvg />
          <Text className=" mt-4 mx-4 text-xs ">New Password</Text>
          <View className=" mt-1 mx-4  flex-row items-center rounded-full bg-white">
            <TextInput
              value={password}
              onChangeText={(text) => {
                if (!text) {
                  setPasswordError("Enter password");
                } else if (text.length < 8) {
                  setPasswordError("Password must be at least 8 characters");
                } else {
                  setPasswordError("");
                }
                setPassword(text);
              }}
              keyboardType="visible-password"
              className="w-full py-3 px-4 text-xs focus:border border-transparent  border rounded-full focus:border-red-500"
              placeholder="Enter confirm password"
            />

            <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
              Enter the password
            </Text>
          </View>
          <Text className=" mt-4 mx-4 text-xs ">Confirm Password</Text>
          <View className=" mt-1 mx-4  flex-row items-center rounded-full bg-white">
            <TextInput
              value={ConfirmPassword}
              onChangeText={(text) => {
                if (!text) {
                  setPasswordError("Enter password");
                } else if (text !== password) {
                  setConfirmPasswordError("Password does not match");
                } else {
                  setConfirmPasswordError("");
                }
                setConfirmPassword(text);
              }}
              keyboardType="visible-password"
              className="w-full py-3 px-4 text-xs focus:border border-transparent  border rounded-full focus:border-red-500"
              placeholder="Enter confirm password"
            />

            {ConfirmPasswordError !== "" ? (
              <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
                {ConfirmPasswordError}
              </Text>
            ) : null}
          </View>
          <View className="px-12 ">
            <TouchableOpacity
              onPress={handleConfirmPress}
              className="w-full mt-10 items-center py-4 rounded-full bg-slate-600"
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text className="text-white text-sm font-semibold	">Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
