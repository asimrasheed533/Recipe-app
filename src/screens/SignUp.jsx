import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [processing, setProcessing] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handelSubmit(e) {
    e.preventDefault();
    if (!name) {
      setNameError("Enter name");
    }
    if (!email) {
      setEmailError("Enter email");
    }
    if (!password) {
      setPasswordError("Enter password");
    }
    if (!ConfirmPassword) {
      setConfirmPasswordError("Enter ConfirmPassword");
    }

    if (name && email && email.includes("@") && password && ConfirmPassword) {
      setProcessing(true);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : -500}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full items-center my-4">
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#FF785B",
            }}
          >
            Sign Up
          </Text>
          <View
            style={{
              marginTop: 30,
            }}
            className="mx-6 flex-row items-center rounded-full bg-slate-50"
          >
            <TextInput
              value={name}
              className="w-full py-2 px-4 border rounded-full border-transparent focus:border focus:border-red-500"
              placeholder="Name"
              onChangeText={(text) => {
                if (!text) {
                  setNameError("Enter the Email");
                } else {
                  setNameError(null);
                }
                setName(text);
              }}
            />
            {nameError !== "" ? (
              <Text className="text-[10px] absolute -bottom-5 text-red-500 left-0">
                {nameError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              marginTop: 20,
            }}
            className="mx-6 flex-row items-center rounded-full bg-slate-50"
          >
            <TextInput
              keyboardType="email-address"
              className="w-full py-2 px-4 border rounded-full border-transparent focus:border focus:border-red-500"
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                if (!text) {
                  setEmailError("Enter the Email");
                } else if (!emailRegex.test(text)) {
                  // Check if email format is valid
                  setEmailError("Invalid Email Format");
                } else {
                  setEmailError(null);
                }
                setEmail(text);
              }}
            />
            {emailError !== "" ? (
              <Text className="text-[10px] absolute -bottom-5 text-red-500 left-0">
                {emailError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              marginTop: 20,
            }}
            className="mx-6 flex-row items-center rounded-full bg-slate-50"
          >
            <TextInput
              secureTextEntry={true}
              className="w-full py-2 px-4 border rounded-full border-transparent focus:border focus:border-red-500"
              placeholder="Enter Password"
              value={password}
              onChangeText={(text) => {
                if (!text) {
                  setPasswordError("Enter password");
                } else if (text.length < 8) {
                  setPasswordError("Password must be 8 characters long");
                } else {
                  setPasswordError(null);
                }
                setPassword(text);
              }}
            />
            {passwordError !== "" ? (
              <Text className="text-[10px] absolute -bottom-5 text-red-500 left-0">
                {passwordError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              marginTop: 20,
            }}
            className="mx-6 flex-row items-center rounded-full bg-slate-50"
          >
            <TextInput
              secureTextEntry={true}
              value={ConfirmPassword}
              className="w-full py-2 px-4 border rounded-full border-transparent focus:border focus:border-red-500"
              placeholder="Confirm Password"
              onChangeText={(text) => {
                if (!text) {
                  setConfirmPasswordError("Enter Password");
                } else if (text !== password) {
                  // Check if passwords match
                  setConfirmPasswordError("Passwords do not match");
                } else {
                  setConfirmPasswordError(null);
                }
                setConfirmPassword(text);
              }}
            />
            {ConfirmPasswordError !== "" ? (
              <Text className="text-[10px] absolute -bottom-5 text-red-500 left-0">
                {ConfirmPasswordError}
              </Text>
            ) : null}
          </View>
          <View className="w-full px-12 ">
            <TouchableOpacity
              onPress={handelSubmit}
              // onPress={() => navigation.navigate("Tabs")}
              style={{
                backgroundColor: "#FF785B",
              }}
              className="w-full mt-10 items-center py-3 rounded-full"
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                {processing ? <>Processing...</> : <> Sign Up</>}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
