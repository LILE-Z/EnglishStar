import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const ColorsPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  const speakColors = () => {
    const introText = "¡Hola, niños! Hoy vamos a aprender sobre los colores en inglés. Los colores son hermosos y están por todas partes. Vamos a conocer algunos colores comunes y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!";
    const colors = "Red, Blue, Yellow, Green, Orange, Purple, Pink, Brown, Black, White";

    Speech.speak(introText, {
      language: 'es-ES',
      onDone: () => {
        Speech.speak(colors, { language: 'en-US' });
      },
    });
  };

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <LinearGradient
      colors={['#f8aa27', '#f8aa27', '#fac55b', '#fff8b6']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDialog}>
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Learn about Colors</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/635/665/original/learning-basic-colors-for-preschool-kindergarten-kids-with-their-names-set-of-colored-spots-on-the-white-background-educational-set-for-children-and-toddlers-vector.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakColors} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.introText}>
          ¡Hola, niños! Hoy vamos a aprender sobre los colores en inglés. Los colores son hermosos y están por todas partes. Vamos a conocer algunos colores comunes y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!
        </Text>
        <View style={styles.colorList}>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'red' }]} />
            <Text style={styles.colorName}>Red</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'blue' }]} />
            <Text style={styles.colorName}>Blue</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'yellow' }]} />
            <Text style={styles.colorName}>Yellow</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'green' }]} />
            <Text style={styles.colorName}>Green</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'orange' }]} />
            <Text style={styles.colorName}>Orange</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'purple' }]} />
            <Text style={styles.colorName}>Purple</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'pink' }]} />
            <Text style={styles.colorName}>Pink</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'brown' }]} />
            <Text style={styles.colorName}>Brown</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'black' }]} />
            <Text style={styles.colorName}>Black</Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorCircle, { backgroundColor: 'white' }]} />
            <Text style={styles.colorName}>White</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/colors.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('voca2F')}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="sunny" size={24} color="white" style={styles.sunnyIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, pequeño artista!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¿Estás listo para una aventura llena de colores? Los colores son mágicos y nos rodean en todas partes. Aprenderemos los nombres de los colores en inglés mientras exploramos el maravilloso mundo del arte. ¡Prepárate para dejar volar tu imaginación y crear hermosas obras maestras llenas de color!
        </Text>
        <Dialog.Actions>
          <Button title="¡Vamos!" onPress={toggleDialog} buttonStyle={styles.dialogButton} />
        </Dialog.Actions>
      </Dialog>
      <View style={styles.starsContainer}>
        <Image source={require('@/assets/images/sun.png')} style={styles.sunImage} />
        <Image source={require('@/assets/images/bird.png')} style={styles.birdImage} />
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
    color: '#20655f',
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
    height: 255,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  speakerButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#20655f',
    padding: 10,
    borderRadius: 50,
  },
  introText: {
    color: '#627254',
    fontSize: 18,
    marginVertical: 20,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  familyList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  familyItem: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  familyEmoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  familyName: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  nextButton: {
    backgroundColor: '#20655f',
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
    left: 100,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  sunImage: {
    position: 'absolute',
    top: 50,
    right: 30,
    width: 80,
    height: 80,
  },
  birdImage: {
    position: 'absolute',
    bottom: 100,
    left: 60,
    width: 60,
    height: 60,
  },
  dialogTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#20655f',
  },
  dialogText: {
    fontSize: 18,
    marginVertical: 20,
    color: '#20655f',
  },
  dialogButton: {
    backgroundColor: '#20655f',
    borderRadius: 20,
  },
  colorList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
  },
  colorCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  colorName: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ColorsPage;