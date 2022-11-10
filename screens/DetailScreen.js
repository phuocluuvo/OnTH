import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function DetailScreen({ route }) {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-teal-600 flex-1 pt-10 relative">
      <StatusBar></StatusBar>
      <View className="flex-row justify-between">
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Image
            source={require("../assets/akar-icons_arrow-back-thick-fill.png")}
            className="w-6 h-6 mx-3"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Vector.png")}
            className="w-6 h-6 mx-3"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full">
        <Text className="text-center text-4xl font-bold text-white">
          {route.params.name}
        </Text>
        <Text className="text-center text-4xl font-bold text-yellow-400 my-5">
          {route.params.price}$
        </Text>
      </View>
      <View className="mx-5 flex-row justify-evenly h-[50%]">
        {/**Group Buttons */}
        <View className="justify-center items-center">
          <TouchableOpacity>
            <Image
              source={require("../assets/S.png")}
              className="w-fit h-fit my-3"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/M.png")}
              className="w-fit h-fit my-3"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Group_5.png")}
              className="w-fit h-fit my-3"
            />
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Image
            source={{ uri: route.params.imgLink }}
            className="w-52 h-80 mx-3"
          />
          <View className="flex-row items-center justify-center">
            <TouchableOpacity>
              <Image
                source={require("../assets/minus.png")}
                className="w-12 h-12 my-3"
              />
            </TouchableOpacity>
            <Text className="font-bold text-white text-4xl px-3">3</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/plus.png")}
                className="w-12 h-12 my-3"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text className="text-white font-bold text-2xl text-center">
        Starbucks' Ethiopia Medium Roast is the perfect coffee for the cold
        brew.
      </Text>

      <TouchableOpacity className="w-[80%] fixed -bottom-[10%] mx-auto bg-orange-500 py-3 rounded-full">
        <Text className="text-center text-white text-xl">Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
