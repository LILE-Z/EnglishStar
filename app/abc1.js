import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
const AlphabetPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();
  const speakAlphabet = () => {
    const introText = "¡Hola, niños! Hoy vamos a aprender sobre el abecedario en inglés. El abecedario inglés tiene 26 letras, desde la A hasta la Z. Cada letra tiene su propio sonido y se usa para formar palabras. Vamos a practicar juntos y aprender a reconocer las letras y sus sonidos. ¿Estás listo? ¡Comencemos!";
    const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

    Speech.speak(introText, { language: 'es-ES', onDone: () => {
      Speech.speak(alphabet, { language: 'en-US' });
    }});
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
        <Text style={styles.headerText}>Learn the Alphabet</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://cdn.getmidnight.com/45d07b00b0188a892509950ff919e14e/2023/03/How-many-alphabet-letters.png' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakAlphabet} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          ¡Hola, niños! Hoy vamos a aprender sobre el abecedario en inglés. El abecedario inglés tiene 26 letras, desde la A hasta la Z. Cada letra tiene su propio sonido y se usa para formar palabras. Vamos a practicar juntos y aprender a reconocer las letras y sus sonidos. ¿Estás listo? ¡Comencemos!
        </Text>
        <Video
          source={require('@/assets/videos/alphabet.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton}
          onPress={() => router.push('abc2')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="moon" size={24} color="white" style={styles.moonIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, amiguito!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          Aquí aprenderás sobre el abecedario en inglés de una manera divertida. Exploraremos las letras y sus sonidos mientras disfrutamos de un emocionante viaje por el espacio. ¡Prepárate para aprender y divertirte al mismo tiempo!
        </Text>
        <Dialog.Actions>
          <Button title="¡Vamos!" onPress={toggleDialog} buttonStyle={styles.dialogButton} />
        </Dialog.Actions>
      </Dialog>
      <View style={styles.starsContainer}>
        <Image source={require('@/assets/images/star.png')} style={styles.star1} />
        <Image source={require('@/assets/images/star.png')} style={styles.star2} />
        <Image source={require('@/assets/images/star.png')} style={styles.star3} />
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
});

export default AlphabetPage;