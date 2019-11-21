import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/success.jpg')} 
                style={styles.image}
                resizeMode="cover"
            />
            </View>
            
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <View style={styles.botton}>
                <Button title="NEW GAME" onPress={props.onRestart} />  
            </View>
            
        </View>
    );
};

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'     
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius:150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30

    },
    botton: {
        marginVertical: 20
    }
});

export default GameOverScreen;
