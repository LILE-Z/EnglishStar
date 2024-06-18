import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const FamilyPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

 const speakFamily = () => {
  const introText = "¡Hola, niños! Hoy vamos a aprender sobre la familia en inglés. La familia es un grupo de personas que nos aman y nos cuidan. Vamos a conocer algunos miembros de la familia y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!";
  const familyMembers = "Mother, Father, Sister, Brother, Grandmother, Grandfather, Aunt, Uncle, Cousin";

  Speech.speak(introText, {
    language: 'es-ES',
    onDone: () => {
      Speech.speak(familyMembers, { language: 'en-US' });
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
        <Text style={styles.headerText}>Learn about Family</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://glamadelaide.com.au/wp-content/uploads/2024/01/s-family.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakFamily} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.introText}>
          ¡Hola, niños! Hoy vamos a aprender sobre la familia en inglés. La familia es un grupo de personas que nos aman y nos cuidan. Vamos a conocer algunos miembros de la familia y aprender sus nombres en inglés. ¿Estás listo? ¡Comencemos!
        </Text>
        <View style={styles.familyList}>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👩</Text>
            <Text style={styles.familyName}>Mother</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👨</Text>
            <Text style={styles.familyName}>Father</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👧</Text>
            <Text style={styles.familyName}>Sister</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👦</Text>
            <Text style={styles.familyName}>Brother</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👵</Text>
            <Text style={styles.familyName}>Grandmother</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👴</Text>
            <Text style={styles.familyName}>Grandfather</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👩‍🦰</Text>
            <Text style={styles.familyName}>Aunt</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>👨‍🦰</Text>
            <Text style={styles.familyName}>Uncle</Text>
          </View>
          <View style={styles.familyItem}>
            <Text style={styles.familyEmoji}>🙇</Text>
            <Text style={styles.familyName}>Cousin</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/family.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('voca2_2')}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="sunny" size={24} color="white" style={styles.rocketIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, pequeño explorador!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¿Estás listo para una aventura familiar llena de amor y cariño? Aprenderemos los nombres de los miembros de la familia en inglés mientras exploramos el maravilloso mundo de los lazos familiares. ¡Prepárate para embarcarte en un viaje lleno de afecto y aprendizaje!
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
    height: 210,
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
});

export default FamilyPage;