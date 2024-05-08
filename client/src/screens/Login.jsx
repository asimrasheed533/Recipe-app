import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Signup from "./SignUp";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

export default function Login() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const navigation = useNavigation();

  function handelSubmit() {
    if (!emailError) {
      setNameError("Enter eamil");
    }
    if (!password) {
      setPasswordError("Enter password");
    }

    if (name && password) {
      setNameError(null);
      setPasswordError(null);
      setName("");
      setPassword("");
    }

    if (!emailError && !passwordError) {
      axios
        .post("/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          navigation.navigate("Tabs");
          console.log(res.data);
        })
        .catch((error) => {
          console.error("An error occurred during login:", error);
        });
    }
    
    console.log(email, password)
  }

  return (
    <GestureHandlerRootView className=" flex-1 px-4 bg-slate-300 relative">
      <BottomSheetModalProvider>
        <StatusBar style="dark" />
        <SafeAreaView className=" flex-1 relative">
          <View className="w-full items-center mt-12">
            <Image source={require("../../assets/logorecipy.png")} />
          </View>
          <Text className=" mt-10 text-xs mx-4 ">Enter Email</Text>
          <View className=" mt-1 mx-3 flex-row items-center rounded-full  bg-white ">
            <TextInput
              maxLength={50}
              onChangeText={(text) => {
                if (!text) {
                  setEmailError("Enter the email");
                } else {
                  setEmailError(null);
                }
                setEmail(text);
              }}
              autoCapitalize="none"
              className="w-full py-3 px-4 text-xs focus:border border-transparent  border rounded-full focus:border-red-500"
              placeholder="Full Name"
            />
            {emailError !== "" ? (
              <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
                {emailError}
              </Text>
            ) : null}
          </View>
          <Text className=" mt-4 mx-4 text-xs ">Enter Password</Text>
          <View className=" mt-1 mx-4  flex-row items-center rounded-full bg-white">
            <TextInput
              onChangeText={(text) => {
                if (!text) {
                  setPasswordError("Enter the password");
                } else {
                  setPasswordError(null);
                }
                setPassword(text);
              }}
              autoCapitalize="none"
              className="w-full py-3 px-4 text-xs focus:border border-transparent  border rounded-full focus:border-red-500"
              placeholder="Password"
            />
            {passwordError !== "" ? (
              <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
                {passwordError}
              </Text>
            ) : null}
          </View>

          <View className="px-12 ">
            <TouchableOpacity
              onPress={handelSubmit}
              // onPress={() => navigation.navigate("Tabs")}
              style={{
                backgroundColor: "#FF785B",
              }}
              className="w-full mt-10 items-center py-4 rounded-full"
            >
              <Text className="text-white text-sm font-semibold	">Sign In</Text>
            </TouchableOpacity>
          </View>

          <View className=" w-full absolute bottom-0">
            <TouchableOpacity
              onPress={handlePresentModalPress}
              className=" bg-[#FF785B]  w-full flex items-center py-3 rounded-t-[30px] pb-8 "
            >
              <Text className="text-white text-lg font-semibold	">Sign Up</Text>
            </TouchableOpacity>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={["85%"]}
              style={{
                borderRadius: 10,
              }}
            >
              <Signup />
            </BottomSheetModal>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
