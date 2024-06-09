import React, { Suspense, useState } from 'react';
import { Text, Button } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useRouter } from 'expo-router';
import { View, StyleSheet, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SQLiteProvider
        databaseName="mydb.db"
        assetSource={{ assetId: require("../assets/mydb.db") }}
        useSuspense
      >
        <Registro />
      </SQLiteProvider>
    </Suspense>
  );
}

function Registro() {
  const db = useSQLiteContext();
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (nombre.trim().length < 5) {
      ToastAndroid.show('El nombre debe tener al menos 5 letras', ToastAndroid.SHORT);
      return;
    }

    if (password.trim().length < 5) {
      ToastAndroid.show('La contraseña debe tener al menos 5 caracteres', ToastAndroid.SHORT);
      return;
    }

    if (password !== confirmPassword) {
      ToastAndroid.show('Las contraseñas no coinciden', ToastAndroid.SHORT);
      return;
    }

    try {
      const existingUser = await db.getAllAsync(
        'SELECT * FROM users WHERE user = ?',
        [nombre]
      );

      if (existingUser.length > 0) {
        ToastAndroid.show('El nombre de usuario ya está registrado', ToastAndroid.SHORT);
        return;
      }

      await db.runAsync(
        'INSERT INTO users (user, password, sesion) VALUES (?, ?, ?)',
        [nombre, password, 0]
      );

      ToastAndroid.show('Registro exitoso', ToastAndroid.SHORT);

      const result = await db.getAllAsync("SELECT * FROM users");
      console.log("Datos actualizados:", result);

      setTimeout(() => {
        console.log('Registro exitoso');
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri:'https://i.pinimg.com/736x/f3/ed/ee/f3edeef287ab6c4ea59b9c971a410f47.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Registro</Text>
          <FontAwesome name="star" size={24} color="gold" style={styles.star1} />
          <FontAwesome name="star" size={18} color="gold" style={styles.star2} />
          <FontAwesome name="star" size={20} color="gold" style={styles.star3} />
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={nombre}
            onChangeText={setNombre}
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
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="white"
          />
          <Button
            title="Registrarse"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={handleSubmit}
            icon={<FontAwesome name="check" size={24} color="white" />}
          />
          <Text style={styles.loginText}>
            ¿Ya tienes una cuenta?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => router.push('/')}
            >
              Inicia sesión
            </Text>
          </Text>
        </View>
      </ImageBackground>
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
    backgroundColor: '#6A5ACD',
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
    top: 210,
    left: 50,
    transform: [{ rotate: '10deg' }],
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});