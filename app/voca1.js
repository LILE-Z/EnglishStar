import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const VegetablesPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  const speakVegetables = () => {
    const introText = "¡Hola, niños! Hoy vamos a aprender sobre los vegetales en inglés. Los vegetales son alimentos saludables y deliciosos que nos ayudan a crecer fuertes y sanos. Vamos a conocer algunos vegetales comunes y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!";
    const vegetables = 'Carrot, Broccoli, Tomato, Cucumber, Lettuce, Spinach, Potato, Onion, Peas, Corn';

    Speech.speak(introText, {
      language: 'es-ES',
      onDone: () => {
        Speech.speak(vegetables, { language: 'en-US' });
      },
    });
  };

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <LinearGradient
      colors={['#0c1445', '#1E90FF','#FFC0CB', "#f5f684"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDialog}>
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Learn about Vegetables</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://img.clipart-library.com/2/clip-cute-veggies/clip-cute-veggies-5.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakVegetables} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          ¡Hola, niños! Hoy vamos a aprender sobre los vegetales en inglés. Los vegetales son alimentos saludables y deliciosos que nos ayudan a crecer fuertes y sanos. Vamos a conocer algunos vegetales comunes y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!
        </Text>
        <View style={styles.vegetablesList}>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥕</Text>
            <Text style={styles.vegetableName}>Carrot</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥦</Text>
            <Text style={styles.vegetableName}>Broccoli</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🍅</Text>
            <Text style={styles.vegetableName}>Tomato</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥒</Text>
            <Text style={styles.vegetableName}>Cucumber</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥬</Text>
            <Text style={styles.vegetableName}>Lettuce</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥬</Text>
            <Text style={styles.vegetableName}>Spinach</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥔</Text>
            <Text style={styles.vegetableName}>Potato</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🧅</Text>
            <Text style={styles.vegetableName}>Onion</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🌽</Text>
            <Text style={styles.vegetableName}>Corn</Text>
          </View>
          <View style={styles.vegetableItem}>
            <Text style={styles.vegetableEmoji}>🥜</Text>
            <Text style={styles.vegetableName}>Peas</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/veggies.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('voca1_2')}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="rocket" size={24} color="white" style={styles.rocketIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, pequeño astronauta!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¿Estás listo para una aventura espacial llena de vegetales saludables? Aprenderemos los nombres de los vegetales en inglés mientras exploramos el vasto universo. ¡Prepárate para despegar hacia un mundo de sabores y nutrición!
        </Text>
        <Dialog.Actions>
          <Button title="¡Despegar!" onPress={toggleDialog} buttonStyle={styles.dialogButton} />
        </Dialog.Actions>
      </Dialog>
      <View style={styles.starsContainer}>
        <Image source={require('@/assets/images/star.png')} style={styles.star1} />
        <Image source={require('@/assets/images/star.png')} style={styles.star2} />
        <Image source={require('@/assets/images/star.png')} style={styles.star3} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  speakerButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 20,
    lineHeight: 24,
  },
  vegetablesList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  vegetableItem: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  vegetableEmoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  vegetableName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#4287f5',
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  rocketIcon: {
    marginLeft: 10,
  },
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  star1: {
    position: 'absolute',
    top: 50,
    left: 30,
    width: 50,
    height: 50,
  },
  star2: {
    position: 'absolute',
    top: 200,
    right: 40,
    width: 30,
    height: 30,
  },
  star3: {
    position: 'absolute',
    bottom: 100,
    left: 60,
    width: 40,
    height: 40,
  },
  dialogTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4287f5',
  },
  dialogText: {
    fontSize: 18,
    marginVertical: 20,
  },
  dialogButton: {
    backgroundColor: '#4287f5',
    borderRadius: 20,
  },
});

export default VegetablesPage;