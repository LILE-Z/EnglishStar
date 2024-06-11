import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
const NumbersPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();
  const speakIntroduction = () => {
    const text = "¡Hola, pequeños matemáticos! Bienvenidos a Numbers Adventure. Aquí aprenderemos los números del 0 al 10 de una manera divertida. Vamos a contar, cantar y jugar con los números. ¿Están listos para esta emocionante aventura numérica? ¡Comencemos!";
    Speech.speak(text, { language: 'es' });
  };

  const speakNumbers = () => {
    const numbers = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
    Speech.speak(numbers, { language: 'en' });
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
        <Text style={styles.headerText}>Numbers Adventure</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://www.teachinglittles.com/wp-content/uploads/2022/01/71WdNAHInML._AC_SL1500_-1024x749.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakIntroduction} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          ¡Bienvenidos a Numbers Adventure! En esta sección, exploraremos los números del 0 al 10. Aprenderemos a contar, reconocer los números y realizar operaciones básicas. ¿Están emocionados por sumergirse en el maravilloso mundo de los números? ¡Vamos a comenzar esta increíble aventura juntos!
        </Text>
        <TouchableOpacity onPress={speakNumbers} style={styles.numbersButton}>
          <Text style={styles.numbersButtonText}>Listen to the Numbers</Text>
        </TouchableOpacity>
        <View style={styles.numbersContainer}>
          <View style={styles.numbersRow}>
            <Text style={styles.numbersText}>0</Text>
            <Text style={styles.numbersText}>1</Text>
            <Text style={styles.numbersText}>2</Text>
            <Text style={styles.numbersText}>3</Text>
            <Text style={styles.numbersText}>4</Text>
          </View>
          <View style={styles.numbersRow}>
            <Text style={styles.numbersText}>5</Text>
            <Text style={styles.numbersText}>6</Text>
            <Text style={styles.numbersText}>7</Text>
            <Text style={styles.numbersText}>8</Text>
            <Text style={styles.numbersText}>9</Text>
            <Text style={styles.numbersText}>10</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/numbers.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton} onPress={()=> router.push('abcFinal')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="rocket" size={24} color="white" style={styles.rocketIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, pequeños matemáticos!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¡Bienvenidos a Numbers Adventure! Aquí aprenderemos los números del 0 al 10 de una manera divertida y emocionante. Prepárense para contar, cantar y jugar con los números. ¡Será una aventura llena de aprendizaje y diversión!
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
    height:250,
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
  numbersButton: {
    backgroundColor: '#4287f5',
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  numbersButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  numbersContainer: {
    backgroundColor: '#1c2e4a',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  numbersText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
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

export default NumbersPage;