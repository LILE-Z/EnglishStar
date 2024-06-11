import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';
const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const shuffledQuestions = shuffleArray([
      {
        question: '¿Con qué letra comienza la palabra "Apple" en inglés?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
      },
      {
        question: 'Escucha el sonido y selecciona la letra correspondiente',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'B',
        sound: 'B',
      },
      {
        question: '¿Con qué letra comienza la palabra "Cat" en inglés?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'C',
      },
      {
        question: 'Escucha el número y selecciona la opción correcta',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        sound: '5',
      },
      {
        question: '¿Con qué letra comienza la palabra "Dog" en inglés?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'D',
      },
      {
        question: 'Escucha el sonido y selecciona la letra correspondiente',
        options: ['A', 'E', 'I', 'O'],
        correctAnswer: 'E',
        sound: 'E',
      },
      {
        question: '¿Con qué letra comienza la palabra "Fish" en inglés?',
        options: ['E', 'F', 'G', 'H'],
        correctAnswer: 'F',
      },
      {
        question: 'Escucha el número y selecciona la opción correcta',
        options: ['7', '8', '9', '10'],
        correctAnswer: '9',
        sound: '9',
      },
    ]);

    setQuestions(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const currentIndex = questions.findIndex((question) => question === currentQuestion);
      const nextIndex = (currentIndex + 1) % questions.length;
      if (nextIndex === 0) {
        setShowResults(true);
      } else {
        setCurrentQuestion(questions[nextIndex]);
        setSelectedAnswer(null);
      }
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setShowResults(false);
    setCurrentQuestion(questions[0]);
    setSelectedAnswer(null);
  };

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  const speakSound = () => {
    if (currentQuestion.sound) {
      Speech.speak(currentQuestion.sound, { language: 'en' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDialog}>
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quiz Time</Text>
      </View>
      {!showResults ? (
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion?.question}</Text>
            {currentQuestion?.sound && (
              <TouchableOpacity onPress={speakSound} style={styles.speakerButton}>
                <Ionicons name="volume-high-outline" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.optionsContainer}>
            {currentQuestion?.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === option &&
                    (selectedAnswer === currentQuestion.correctAnswer
                      ? styles.correctAnswer
                      : styles.incorrectAnswer),
                ]}
                onPress={() => handleAnswerSelect(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.nextButton, !selectedAnswer && styles.disabledButton]}
            onPress={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Your Score: {score}/{questions.length}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestartQuiz}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton}
          onPress={()=> router.push('/home')}
          >
            <Text style={styles.homeButtonText}>Go Home</Text>
          </TouchableOpacity>
        </View>
      )}
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="¡Bienvenido al cuestionario!" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogText}>
          En este cuestionario, pondrás a prueba tus conocimientos sobre el alfabeto, vocabulario y números en inglés. Responde las preguntas y diviértete aprendiendo. ¡Buena suerte!
        </Text>
        <Dialog.Actions>
          <Button title="¡Empezar!" onPress={toggleDialog} buttonStyle={styles.dialogButton} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1445',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#1c2e4a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  speakerButton: {
    alignSelf: 'flex-end',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#4287f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  correctAnswer: {
    backgroundColor: 'green',
  },
  incorrectAnswer: {
    backgroundColor: 'red',
  },
  nextButton: {
    backgroundColor: '#4287f5',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#4287f5',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: 'purple',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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

export default QuizPage;