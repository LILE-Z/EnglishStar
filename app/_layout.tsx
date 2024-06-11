import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Gesture } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          initialRouteName="index"
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#FFD700",
            },
            drawerLabelStyle: {
              fontFamily: "SpaceMono",
              fontSize: 18,
              color: "#000",
            },
            drawerActiveBackgroundColor: "#FF6B6B",
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor: "#000",
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="registro"
            options={{
              drawerItemStyle: {
                display: "none",
              },
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFD700",
              },
              headerTintColor: "#000",
            }}
          />
          <Drawer.Screen
            name="home"
            options={{
              title: "Home",
              headerShown: true,
              headerStyle: {
                backgroundColor: "#FFD700",
              },
              headerTintColor: "#000",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="abc1"
            options={{
              title: "ABC",
              headerShown: true,
              headerStyle: {
                backgroundColor: "#FF6B6B",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <MaterialIcons name="abc" size={24} color="black" />
              ),
            }}
          />
          <Drawer.Screen
            name="voca1"
            options={{
              title: "Vocabulary 1",
              headerShown: true,
              headerStyle: {
                backgroundColor: "#8E44AD",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="voca2"
            options={{
              title: "Vocabulary 2",
              headerShown: true,
              headerStyle: {
                backgroundColor: "#4CAF50",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
