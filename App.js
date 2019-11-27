import React, { useState }  from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/Amatic-Bold.ttf'),
    'open-sans-lato' : require('./assets/fonts/ChunkFive-Regular.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] =  useState();
  const [quessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
      
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  // flex only GameOverScreen
  // content = (
  //   <GameOverScreen 
  //     roundsNumber={quessRounds} 
  //     userNumber ={userNumber} 
  //     onRestart={configureNewGameHandler} 
  //   />
  // );
  if (userNumber && quessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      );
  } else if (quessRounds > 0){
    content = 
      <GameOverScreen 
        roundsNumber={quessRounds} 
        userNumber ={userNumber} 
        onRestart={configureNewGameHandler} 
      />;
  }

  return (
    <View style={styles.screen}>
      <Header/>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
  
});
