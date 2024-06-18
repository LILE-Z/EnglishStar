import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const SchoolPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  const speakSchool = () => {
    const introText = "¡Hola, niños! Hoy vamos a aprender sobre la escuela en inglés. La escuela es un lugar donde aprendemos y hacemos amigos. Vamos a conocer algunas palabras relacionadas con la escuela y aprenderlas en inglés. ¿Estás listo? ¡Comencemos!";
    const schoolWords = "Teacher, Student, Classroom, Desk, Chair, Pencil, Notebook, Backpack, Eraser, Ruler, Whiteboard, Library, Cafeteria, Playground, Principal, Janitor";

    Speech.speak(introText, {
      language: 'es-ES',
      onDone: () => {
        Speech.speak(schoolWords, { language: 'en-US' });
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
        <Text style={styles.headerText}>Learn about School</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/004/641/880/non_2x/illustration-of-high-school-building-school-building-free-vector.jpg' }}
            style={styles.image}
          />
          <TouchableOpacity onPress={speakSchool} style={styles.speakerButton}>
            <Ionicons name="volume-high" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.introText}>
          ¡Hola, niños! Hoy vamos a aprender sobre la escuela en inglés. La escuela es un lugar donde aprendemos y hacemos amigos. Vamos a conocer algunas palabras relacionadas con la escuela y aprenderlas en inglés. ¿Estás listo? ¡Comencemos!
        </Text>
        <View style={styles.schoolList}>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>👩‍🏫</Text>
            <Text style={styles.schoolName}>Teacher</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>👨‍🎓</Text>
            <Text style={styles.schoolName}>Student</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🏫</Text>
            <Text style={styles.schoolName}>Classroom</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🪑</Text>
            <Text style={styles.schoolName}>Desk</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🪑</Text>
            <Text style={styles.schoolName}>Chair</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>✏️</Text>
            <Text style={styles.schoolName}>Pencil</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>📓</Text>
            <Text style={styles.schoolName}>Notebook</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🎒</Text>
            <Text style={styles.schoolName}>Backpack</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🧽</Text>
            <Text style={styles.schoolName}>Eraser</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>📏</Text>
            <Text style={styles.schoolName}>Ruler</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🧮</Text>
            <Text style={styles.schoolName}>Whiteboard</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>📚</Text>
            <Text style={styles.schoolName}>Library</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🍽️</Text>
            <Text style={styles.schoolName}>Cafeteria</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🎡</Text>
            <Text style={styles.schoolName}>Playground</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>👨‍💼</Text>
            <Text style={styles.schoolName}>Principal</Text>
          </View>
          <View style={styles.schoolItem}>
            <Text style={styles.schoolEmoji}>🧹</Text>
            <Text style={styles.schoolName}>Janitor</Text>
          </View>
        </View>
        <Video
          source={require('@/assets/videos/school.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('voca2_3')}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="sunny" size={24} color="white" style={styles.sunnyIcon} />
        </TouchableOpacity>
      </ScrollView>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Hola, pequeño estudiante!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          ¿Estás listo para una aventura escolar llena de aprendizaje y diversión? Aprenderemos palabras relacionadas con la escuela en inglés mientras exploramos el maravilloso mundo del conocimiento. ¡Prepárate para embarcarte en un viaje educativo lleno de descubrimientos!
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
    height: 270,
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
  schoolList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  schoolItem: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  schoolEmoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  schoolName: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SchoolPage;