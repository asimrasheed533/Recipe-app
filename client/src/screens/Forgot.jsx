import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BackIcon from "../../assets/BackIcon";
import ForgotSvg from "../../assets/ForgotSvg";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
export default function Forgot() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigation = useNavigation();
  const handleConfirmPress = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://192.168.100.175:9000/api/users/forgot", { email });
  
      if (response.status === 200) {
        navigation.navigate("OTP");
      } else {
        // Here, response.data will be the string "OTP sent successfully" if status is 200
        // So, you can just show a success message here
        Alert.alert("Success", response.data);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP");
    } finally {
      setLoading(false);
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
              Forgot
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
          <Text className=" mt-4 mx-4 text-xs ">Email Address</Text>
          <View className=" mt-1 mx-4  flex-row items-center rounded-full bg-white">
            <TextInput
            value={setEmail}
            onChangeText={(text)=> setEmail(text)}
              keyboardType="email-address"
              className="w-full py-3 px-4 text-xs focus:border border-transparent  border rounded-full focus:border-red-500"
              placeholder="Enter email"
            />

            <Text className="text-xs absolute -bottom-5 text-red-500 left-0">
              Enter the email
            </Text>
          </View>
          <View className="px-12 ">
            <TouchableOpacity
            // onPress={ ()=> navigation.navigate("OTP")}
            onPress={handleConfirmPress}
              style={{
                backgroundColor: "#FF785B",
              }}
              className="w-full mt-10 items-center py-4 rounded-full"
            >
              <Text className="text-white text-sm font-semibold	">Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
