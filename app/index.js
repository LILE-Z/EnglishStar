import React, { Suspense, useState, useEffect } from "react";
import { Text, StyleSheet, View, ImageBackground, Image, ToastAndroid, TextInput, TouchableOpacity } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { Button, Dialog } from "@rneui/base";
import { useRouter, useFocusEffect } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SQLiteProvider
        databaseName="mydb.db"
        assetSource={{ assetId: require("../assets/mydb.db") }}
        useSuspense
      >
        <LoginScreen />
      </SQLiteProvider>
    </Suspense>
  );
}

function LoginScreen() {
  const db = useSQLiteContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const result = await db.getAllAsync(
        "SELECT * FROM users WHERE sesion = 1"
      );

      if (result.length > 0) {
        router.push('/menu');
      }
    } catch (error) {
      console.error("Error al verificar la sesión:", error);
    }
  };

  const handleLogin = async () => {
    if (user.trim() === "" || password.trim() === "") {
      ToastAndroid.show('Por favor, completa todos los campos.', ToastAndroid.SHORT);
      return;
    }

    try {
      const result = await db.getAllAsync(
        "SELECT * FROM users WHERE user = ? AND password = ? AND sesion = 0",
        [user, password]
      );

      if (result.length > 0) {
        await db.runAsync(
          "UPDATE users SET sesion = 1 WHERE user = ?",
          [user]
        );

        router.push('/menu');
      } else {
        ToastAndroid.show('Credenciales incorrectas. Por favor, verifica tus datos e intenta nuevamente.', ToastAndroid.LONG);
      }
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
    }
  };

  const refreshData = async () => {
    try {
      const result = await db.getAllAsync("SELECT * FROM users");
      console.log("Datos actualizados:", result);
    } catch (error) {
      console.error("Error al obtener los datos actualizados:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      refreshData();
    }, [])
  );

  const handleLogoPress = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://wallpapers.com/images/hd/aesthetic-star-736-x-1308-13sw7ekv7k8j7ua0.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Inicio de sesión</Text>
          <FontAwesome name="star" size={24} color="white" style={styles.star1} />
          <FontAwesome name="star" size={18} color="white" style={styles.star2} />
          <FontAwesome name="star" size={20} color="white" style={styles.star3} />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={user}
            onChangeText={setUser}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="white"
          />
          <Button
            title="Iniciar sesión"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={handleLogin}
            icon={<FontAwesome name="sun-o" size={24} color="white" />}
          />
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <Text style={styles.registerText}>
            ¿No tienes una cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => router.push('/registro')}
            >
              Regístrate
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={closeDialog}
        overlayStyle={styles.dialogOverlay}
      >
        <View style={styles.dialogContent}>
          <Text style={styles.dialogText}>¡Hola! Debes llenar los campos de arriba.</Text>
          <Button
            title="Cerrar"
            onPress={closeDialog}
            buttonStyle={styles.dialogButton}
            titleStyle={styles.dialogButtonTitle}
          />
        </View>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  star1: {
    position: 'absolute',
    top: 40,
    left: 30,
    transform: [{ rotate: '20deg' }],
  },
  star2: {
    position: 'absolute',
    top: 80,
    right: 40,
    transform: [{ rotate: '-15deg' }],
  },
  star3: {
    position: 'absolute',
    top: 200,
    left: 50,
    transform: [{ rotate: '10deg' }],
  },
  registerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  registerLink: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
  dialogOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  dialogContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  dialogText: {
    fontSize: 18,
    marginBottom: 20,
  },
  dialogButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 10,
  },
  dialogButtonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});