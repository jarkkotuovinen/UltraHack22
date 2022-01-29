/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Feather, Entypo, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import GoalsScreen from "../screens/GoalsScreen";
import ThirdScreen from "../screens/ThirdScreen";
import FourthScreen from "../screens/FourthScreen";
import FifthScreen from "../screens/FifthScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerTitle: () => (
            <FontAwesome
              name="info-circle"
              size={25}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: "none",
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={GoalsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <Foundation name="mountains" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={ThirdScreen}
        options={{
          tabBarShowLabel: false,
          title: "Tab Three",
          tabBarIcon: ({ color }) => (
            <Entypo name="tree" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={FourthScreen}
        options={{
          tabBarShowLabel: false,
          title: "Tab Four",
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={FifthScreen}
        options={{
          tabBarShowLabel: false,
          title: "Tab Five",
          tabBarIcon: ({ color }) => (
            <Feather name="info" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
