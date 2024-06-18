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
import { Share, Linking, Platform, Alert, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function CustomDrawerContent(props: any) {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          "¡Hola! Soy un pequeño astronauta en busca de conocimiento estelar. Me encantaría recibir ayuda adicional para aprender más sobre el fascinante universo de las Matemáticas. ¡Juntos podemos alcanzar las estrellas del saber! 🚀✨",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Resto del contenido del Drawer */}
      <DrawerItemList {...props} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <Ionicons
          name="call"
          size={24}
          color="black"
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL("tel:2213274255");
            } else {
              Linking.openURL("telprompt:2213274255");
            }
          }}
        />
        <Ionicons
          name="share-social"
          size={24}
          color="black"
          onPress={handleShare}
        />
      </View>
    </DrawerContentScrollView>
  );
}

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
          drawerContent={(props) => <CustomDrawerContent {...props} />}
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
            name="abc2"
            options={{
              title: "ABC",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="abc3"
            options={{
              title: "ABC",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="abcFinal"
            options={{
              title: "ABC Quiz",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="voca1_2"
            options={{
              title: "Vocabulary 1",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="voca1_3"
            options={{
              title: "Vocabulary 1",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="voca1F"
            options={{
              title: "Vocabulary 1",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
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
            name="voca2_2"
            options={{
              title: "Vocabulary 2",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
              headerStyle: {
                backgroundColor: "#4CAF50",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="voca2_3"
            options={{
              title: "Vocabulary 2",
              headerShown: true,
              drawerItemStyle: {
                display: "none",
              },
              headerStyle: {
                backgroundColor: "#4CAF50",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="voca2F"
            options={{
              title: "Vocabulary 2",
              headerShown: true,
              headerStyle: {
                backgroundColor: "#4CAF50",
              },
              drawerItemStyle: {
                display: "none",
              },
              headerTintColor: "#fff",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
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
