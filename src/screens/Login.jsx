import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Signup from "./SignUp";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
// import ArrowIcon from "../../assets/arrowIcon";

export default function Login() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [processing, setProcessing] = useState(false);

  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const navigation = useNavigation();

  function handelSubmit(e) {
    e.preventDefault();
    if (!name) {
      setNameError("Enter name");
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
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView>
          <StatusBar style="dark" />
          <View className="w-full h-full">
            <View className="w-full items-center mt-12">
              <Image source={require("../../assets/logorecipy.png")} />
            </View>

            <View className="mx-10 mt-10 flex-row items-center rounded-full  bg-white ">
              <TextInput
                maxLength={50}
                onChangeText={(text) => {
                  if (!text) {
                    setNameError("Enter the Name");
                  } else {
                    setNameError(null);
                  }
                  setName(text);
                }}
                autoCapitalize="none"
                className="w-full py-4 px-4 focus:border border border-transparent rounded-full focus:border-red-500"
                placeholder="Full Name"
              />
              {nameError !== "" ? (
                <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
                  {nameError}
                </Text>
              ) : null}
            </View>

            <View className="mx-10 mt-6 flex-row items-center rounded-full bg-white">
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
                className="w-full p-4 focus:border border-transparent  border rounded-full focus:border-red-500"
                placeholder="Password"
              />
              {passwordError !== "" ? (
                <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
                  {passwordError}
                </Text>
              ) : null}
            </View>

            <View className="w-full px-12 ">
              <TouchableOpacity
                // onPress={handelSubmit}
                onPress={() => navigation.navigate("Tabs")}
                style={{
                  backgroundColor: "#FF785B",
                }}
                className="w-full mt-10 items-center py-4 rounded-full"
              >
                <Text className="text-white text-sm font-semibold	">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-full px-8 absolute bottom-0 ">
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={{
                  backgroundColor: "#FF785B",
                }}
                className="w-full flex items-center py-3 rounded-t-[50px] pb-10 "
              >
                <Text className="text-white text-lg font-semibold	">
                  Sign Up
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BottomSheetModal
                  ref={bottomSheetModalRef}
                  index={0}
                  snapPoints={["80%"]}
                  style={{
                    borderRadius: 30,
                  }}
                >
                  <Signup />
                </BottomSheetModal>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
