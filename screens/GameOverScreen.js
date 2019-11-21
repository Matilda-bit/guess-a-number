import React from 'react';
import { 
        View, 
        StyleSheet, 
        Text, 
        Button, 
        Image 
    } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image 
                fadeDuration={1000}
                source={require('../assets/success.jpg')}
                // source={{
                //     uri: 
                //         'https://static.vecteezy.com/system/resources/previews/000/271/578/non_2x/business-success-businessman-showing-the-top-of-the-chart-and-screaming-with-joy-retro-style-pop-art-vector-illustration-white-adult-male-caucasian.jpg'}} 
                style={styles.image}
                resizeMode="cover"
            />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed{' '} 
                <Text style={styles.highlight}>{props.roundsNumber}</Text> 
                {' '}round to guess the number{' '} 
                <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            </View>
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
    },
    highlight : {
        color: Colors.primary,
        fontFamily: 'open-sans-lato'
    },
    resultContainer:{
        marginHorizontal: 70,
        marginVertical: 18

    },
    resultText: {
        textAlign:'center',
        fontSize: 20
    }
});

export default GameOverScreen;
