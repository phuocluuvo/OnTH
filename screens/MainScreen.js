import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CoffeeItem from "../components/CoffeeItem";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
const data = [
  {
    id: 1,
    name: "Starbuck Coffee",
    rating: 4,
    price: 150,
    imgLink: require("../assets/Caramel.png"),
  },
  {
    id: 2,
    name: "Black Coffee",
    rating: 4,
    price: 120,
    imgLink: require("../assets/cacaramel_big.png"),
  },
  {
    id: 3,
    name: "Caramel",
    rating: 4,
    price: 100,
    imgLink: require("../assets/cacaramel_big.png"),
  },
];
export default function MainScreen({ route }) {
  const [coffees, setCoffees] = useState();
  const [search, setSearch] = useState("");

  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://6348d0cc0b382d796c77b503.mockapi.io/Cafe")
      .then((data) => setCoffees(data.data));
    //setCoffees(data);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 px-3">
      <StatusBar></StatusBar>
      {/*user*/}
      <View className="flex-row w-full justify-end items-center py-5 ">
        <Text className="text-lg">Good morning,</Text>
        <Text className="text-lg font-bold">{route.params.username}!</Text>
        <Image
          source={{ uri: route.params.avatar }}
          className="w-12 h-12 mx-3"
        />
      </View>
      {/*search*/}
      <View className="w-full flex-row justify-between items-center bg-slate-100  rounded-full pr-2">
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Find the coffee for you!"
          className="flex-1 text-lg py-3 px-5"
        ></TextInput>
        <TouchableOpacity className="bg-white rounded-full">
          <Image
            source={require("../assets/Group8.png")}
            className="w-6 h-6 m-1"
          />
        </TouchableOpacity>
      </View>
      {/*Button*/}
      <View className=" w-full flex-row py-5 justify-between">
        <View className="bg-teal-700  flex-row items-center justify-center pr-3 py-3 rounded-full">
          <Image
            source={require("../assets/coffee_glass.png")}
            className="w-6 h-6 mx-3"
          />
          <Text className="text-white text-xl font-bold">Coffee</Text>
        </View>

        <View className="bg-teal-100  flex-row items-center justify-center pr-3 py-3 rounded-full">
          <Image
            source={require("../assets/coffee_glass.png")}
            className="w-6 h-6 mx-3"
          />
          <Text className=" text-xl font-bold">Snack</Text>
        </View>
      </View>
      <View className="bg-slate-100 rounded-xl flex-row w-full justify-center items-center py-5">
        <Text className="text-2xl w-1/2">
          50% Discount for All Purchase This Morning
        </Text>
        <Image
          source={require("../assets/pngtree-coffee-grains-flying-into-cup-of-espresso-with-splash-png-background-png-image_1742478-removebg-preview_1.png")}
          className="w-fit h-fit mx-3"
        />
      </View>
      <Text className="font-bold text-3xl py-5">Recomendation</Text>
      <FlatList
        className="bg-white"
        data={coffees}
        horizontal
        key={(t) => t.id}
        renderItem={({ item }) => <CoffeeItem coffee={item} />}
      />
    </SafeAreaView>
  );
}
