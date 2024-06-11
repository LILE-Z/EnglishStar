import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
const VocabularyPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();
  const speakIntroduction = () => {
    const text = "¡Hola, pequeños exploradores! Bienvenidos a Vocabulary Juniors. Aquí aprenderemos nuevas palabras en inglés mientras nos divertimos. Vamos a descubrir el fascinante mundo del vocabulario y a expandir nuestros conocimientos. ¿Están listos para esta emocionante aventura? ¡Comencemos!";
    Speech.speak(text, { language: 'es' });
  };

  const speakVocabulary = () => {
    const vocabulary = "A for Apple, B for Ball, C for Cat, D for Dog, E for Egg, F for Fish, G for Goat, H for Hat, I for Igloo, J for Jacket, K for Key, L for Leaf, M for Mouse, N for Nest, O for Octopus, P for Paint, Q for Queen, R for Rabbit, S for Socks, T for Turtle, U for Umbrella, V for Violin, W for Wagon, X for X-ray, Y for Yarn, Z for Zipper";
    Speech.speak(vocabulary, { language: 'en' });
  };

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDialog}>
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Vocabulary Juniors</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/28/35/18/28351823db273323c610a35a7019042d.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakIntroduction} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          ¡Bienvenidos a Vocabulary Juniors! En esta sección, exploraremos una variedad de palabras en inglés y aprenderemos su significado. A través de imágenes y videos divertidos, expandiremos nuestro vocabulario y nos sumergiremos en el maravilloso mundo del lenguaje. ¿Están emocionados por aprender nuevas palabras? ¡Vamos a comenzar esta increíble aventura juntos!
        </Text>
        <TouchableOpacity onPress={speakVocabulary} style={styles.vocabularyButton}>
          <Text style={styles.vocabularyButtonText}>Listen to the Vocabulary</Text>
        </TouchableOpacity>
        <View style={styles.vocabularyContainer}>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>A for Apple</Text>
            <Text style={styles.vocabularyText}>B for Ball</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>C for Cat</Text>
            <Text style={styles.vocabularyText}>D for Dog</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>E for Egg</Text>
            <Text style={styles.vocabularyText}>F for Fish</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>G for Goat</Text>
            <Text style={styles.vocabularyText}>H for Hat</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>I for Igloo</Text>
            <Text style={styles.vocabularyText}>J for Jacket</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>K for Key</Text>
            <Text style={styles.vocabularyText}>L for Leaf</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>M for Mouse</Text>
            <Text style={styles.vocabularyText}>N for Nest</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>O for Octopus</Text>
            <Text style={styles.vocabularyText}>P for Paint</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>Q for Queen</Text>
            <Text style={styles.vocabularyText}>R for Rabbit</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>S for Socks</Text>
            <Text style={styles.vocabularyText}>T for Turtle</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>U for Umbrella</Text>
            <Text style={styles.vocabularyText}>V for Violin</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>W for Wagon</Text>
            <Text style={styles.vocabularyText}>X for X-ray</Text>
          </View>
          <View style={styles.vocabularyRow}>
            <Text style={styles.vocabularyText}>Y for Yarn</Text>
            <Text style={styles.vocabularyText}>Z for Zipper</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/vocaJuniors.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton}
        onPress={() => router.push('abc3')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="rocket" size={24} color="white" style={styles.rocketIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, amiguitos!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¡Bienvenidos a Vocabulary Juniors! Aquí aprenderemos nuevas palabras en inglés de una manera divertida y emocionante. Prepárense para explorar el increíble mundo del vocabulario y expandir sus conocimientos. ¡Será una aventura llena de sorpresas y aprendizaje!
        </Text>
        <Dialog.Actions>
          <Button title="¡Vamos!" onPress={toggleDialog} buttonStyle={styles.dialogButton} />
        </Dialog.Actions>
      </Dialog>
      <View style={styles.starsContainer}>
        <Image source={require('@/assets/images/star.png')} style={styles.star1} />
        <Image source={require('@/assets/images/star.png')} style={styles.star2} />
        <Image source={require('@/assets/images/star.png')} style={styles.star3} />
        <Image source={require('@/assets/images/star.png')} style={styles.star4} />
        <Image source={require('@/assets/images/star.png')} style={styles.star5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#0c1445',
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
    height: 300,
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
  moonIcon: {
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
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  vocabularyButton: {
    backgroundColor: '#4287f5',
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  vocabularyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vocabularyContainer: {
    backgroundColor: '#1c2e4a',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  vocabularyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vocabularyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  star1: {
    position: 'absolute',
    top: 50,
    left: 30,
    width: 20,
    height: 20,
  },
  star2: {
    position: 'absolute',
    top: 200,
    right: 40,
    width: 15,
    height: 15,
  },
  star3: {
    position: 'absolute',
    bottom: 100,
    left: 60,
    width: 18,
    height: 18,
  },
  star4: {
    position: 'absolute',
    top: 120,
    right: 20,
    width: 22,
    height: 22,
  },
  star5: {
    position: 'absolute',
    bottom: 200,
    left: 40,
    width: 16,
    height: 16,
  },
});

export default VocabularyPage;