import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import BackIcon from "../../assets/BackIcon";

const ContactUs = () => {
  const navigation = useNavigation();

  // State variable to track active input field
  const [activeInput, setActiveInput] = useState(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FB6D3B"}}>
      {/* Top Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{left: 10, top: 3}}>
        
           <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full h-8 w-8 bg-white"
          >
            <BackIcon />
          </TouchableOpacity>
      
        </View>

        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
          <Text
            style={{
              color: "#fff",
              fontSize: 23,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Us
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          marginTop: 20,
          padding: 20,
        }}
      >
        <View>
          {/* <ImageBackground
            source={require("../images/contactback.png")}
            style={{
              width: 136,
              height: 134,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../images/contactIcon.png")}
              style={{alignSelf: "center"}}
            />
          </ImageBackground> */}
        </View>
        <Text
          style={{
            fontSize: 13,
            color: "#000",
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Email
        </Text>
        <TextInput
          keyboardType="email-address"
          // value={confirmPassword}
          // onChangeText={setConfirmPassword}
          placeholder="Enter Email Address"
          style={{
            padding: 10,
            backgroundColor: "#F2F2F2",
            borderRadius: 35,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor:
              activeInput === "confirmPassword" ? "#238832" : "#F2F2F2",
          }}
        />
        <Text
          style={{
            fontSize: 13,
            color: "#000",
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Phone number
        </Text>
        <TextInput
          // value={confirmPassword}
          // onChangeText={setConfirmPassword}
          placeholder="Enter Phone Number"
          keyboardType="decimal-pad"
          style={{
            padding: 10,
            backgroundColor: "#F2F2F2",
            borderRadius: 35,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor:
              activeInput === "confirmPassword" ? "#238832" : "#F2F2F2",
          }}
        />

        <Text
          style={{
            fontSize: 13,
            color: "#000",
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          First Name
        </Text>
        <TextInput
          // value={confirmPassword}
          // onChangeText={setConfirmPassword}
          placeholder="Enter First Name"
          keyboardType="default"
          style={{
            padding: 10,
            backgroundColor: "#F2F2F2",
            borderRadius: 35,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor:
              activeInput === "confirmPassword" ? "#238832" : "#F2F2F2",
          }}
        />
        <Text
          style={{
            fontSize: 13,
            color: "#000",
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Message
        </Text>
        <TextInput
          placeholder="Type here"
          keyboardType="default"
          inputMode="text"
          style={{
            padding: 10,
            backgroundColor: "#F2F2F2",
            borderRadius: 10,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor: activeInput === "message" ? "#238832" : "#F2F2F2",
            height: 100,
            textAlignVertical: "top",
          }}
          onFocus={() => setActiveInput("message")}
          onBlur={() => setActiveInput(null)}
        />

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: "black",
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
    marginTop: "10%",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
export default ContactUs;