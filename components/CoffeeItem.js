import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeItem({ coffee }) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate({ name: "DetailScreen", params: coffee })}
      className="bg-teal-600 h-64 rounded-xl px-5 py-2 mr-2 justify-center items-center"
    >
      <Image source={{ uri: coffee.imgLink }} className="h-32 w-16" />
      <Text className="text-white font-bold text-2xl">{coffee.name}</Text>
      <View className="flex-row justify-between">
        <Text className="text-yellow-400 font-bold text-3xl">
          {coffee.price}$
        </Text>
        <AirbnbRating
          showRating={false}
          defaultRating={coffee.rating}
          size={10}
        />
      </View>
    </TouchableOpacity>
  );
}
