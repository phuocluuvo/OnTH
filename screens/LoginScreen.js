import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
const LoginScreen = () => {
  const nav = useNavigation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  function loginHandler() {
    setUser({
      username: username,
      password: password,
      avatar:
        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    });
    nav.navigate({
      name: "MainScreen",
      params: {
        username: username,
        password: password,
        avatar:
          "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
      },
    });
  }
  return (
    <View className="flex-1 items-center">
      <LinearGradient
        colors={["#6366f1", "#a855f7"]}
        start={[0.2, 0.1]}
        className="flex-1 w-full"
      >
        <StatusBar></StatusBar>
        <View className=" items-center mt-32">
          <Text className="text-4xl py-5 font-bold">Hello Again!</Text>
          <Text className="text-slate-600 text-2xl text-center w-[50vw]">
            Welcome back you're been misssed!
          </Text>
          <View className="w-[80vw] my-5">
            <TextInput
              onChangeText={setUserName}
              value={username}
              className="rounded-md bg-white w-full mt-5 p-4 text-lg"
              placeholder="Enter username"
            ></TextInput>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              className="rounded-md bg-white w-full my-5 p-4 text-lg"
            ></TextInput>
            <TouchableOpacity className="w-full">
              <Text className="text-right text-lg">Recovery Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              loginHandler();
            }}
            className="shadow-md bg-red-400 py-4 px-8 w-[80vw] rounded-lg"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <Text className="py-5 text-lg">Or continue with</Text>
          <View className="flex-row w-[90vw] justify-evenly">
            <TouchableOpacity className="w-24 h-16 rounded-md bg-white border-[3px] border-white">
              <Image
                className="w-12 h-12 m-auto"
                source={require("../assets/google.jpg")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-16 rounded-md bg-white border-[3px] border-white">
              <Image
                className="w-12 h-12 m-auto"
                source={require("../assets/Tao.jpg")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-16 rounded-md bg-white border-[3px] border-white">
              <Image
                className="w-12 h-12 m-auto"
                source={require("../assets/face.jpg")}
              ></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="my-20 flex-row">
            <Text>Not a member?</Text>
            <Text className="text-white">Register Now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
