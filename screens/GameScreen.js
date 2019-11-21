import React, { useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
// import DefaultStyles from '../constants/default-styles';
import BodyText from '../components/BodyText';


const generateRandomBetween = (min, max, exclute) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if (rndNum === exclute) {
        return generateRandomBetween(min, max, exclute);
    } else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);
const GameScreen = props => {
    const initialGuess =  generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice){
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]); 
    
    const nextCuessHandler = direction => {
            if 
                ((direction === 'lower' && currentGuess < props.userChoice) || 
                (direction === 'greater' && currentGuess > props.userChoice)
            ){
                Alert.alert('Don\'t lie', 'You know that this is wrong...', 
                [{text: 'Sorry!', style: 'cencel'}
                ]);
                return;
            }
            if (direction === 'lower') {
                currentHigh.current = currentGuess;
            } else {
                currentLow.current = currentGuess + 1;
            }
            const nextNumber = generateRandomBetween(
                currentLow.current,
                currentHigh.current,
                currentGuess
            );
            setCurrentGuess(nextNumber);
            // setRounds(curRounds => curRounds + 1);
            setPastGuesses(curPastGuesses => [nextNumber.toString(),...curPastGuesses]);
    };

    return(
        <View style={styles.screen}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card style={styles.buttonContainer}>
                
                <MainButton onPress={nextCuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </MainButton>
                <MainButton onPress={nextCuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </MainButton>     
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list} > 
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList 
                    keyExtractor={(item) => item} 
                    data={pastGuesses} 
                    renderItem={renderListItem.bind(this, pastGuesses.length)} 
                    contentContainerStyle={styles.list}
                />

            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 320,
        maxWidth: '90%'
    },
    listContainer: {
        flex: 1,
        width: '60%'
    },
    list: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    }
});

export default GameScreen;