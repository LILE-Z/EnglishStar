import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const Card = ({ imageSrc, title, subtitle, buttonColor, overlayColor, page }) => {
  const router = useRouter();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: imageSrc }} style={styles.backgroundImage} />
      </View>
      <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={() => router.push(page)}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card
          imageSrc="https://ooliteracy.com/wp-content/uploads/2023/04/Feature-Image-for-Alphabet-Sequencing-Blog-Post.png"
          title="Basics Juniors"
          subtitle="Alphabet, Vocabulary Begginers , Numbers"
          buttonColor="#FF6B6B"
          overlayColor="#FFE9E9"
          page="/abc1"
        />
        <Card
          imageSrc="https://www.hola.com/imagenes/estar-bien/20180629125821/el-significado-de-los-colores-de-las-frutas-cs/0-577-509/frutascolores-t.jpg"
          title="Vocabulary 1"
          subtitle="Fruits and Vegtables , Animals"
          buttonColor="#8E44AD"
          overlayColor="#F8E1FF"
          page="/voca1"
        />
        <Card
          imageSrc="https://in2english.net/wp-content/uploads/2020/03/my-family2.jpg"
          title="Vocabulary 2"
          subtitle="Family, Colors"
          buttonColor="#F1C40F"
          overlayColor="#FFF5CC"
          page="/voca2"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: 50,
    marginTop: -50,
  },
  cardContainer: {
    marginVertical: 70,
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: -90,
    left: 20,
    right: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 'auto',
  },
});

export default App;