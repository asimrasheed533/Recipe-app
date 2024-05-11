import { View,SafeAreaView,TouchableOpacity, Text, Touchable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <View className="px-12 ">
            <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
              style={{
                backgroundColor: "red",
              }}
              className="w-full mt-10 items-center py-4 rounded-full"
            >
              <Text className="text-white text-sm font-semibold	">Logout</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}