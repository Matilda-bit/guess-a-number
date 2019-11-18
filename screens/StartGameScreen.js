import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from './component/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset"  onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </View>
            <Card style={styles.inputContainer}/>
        </View>
    );

};

const styles= StyleSheet.create ({
   screen: {
       flex: 1,
       padding: 10,
       alignItems: 'center'
   },
   buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
   },
   inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
   },
   title: {
       fontSize: 20,
       marginVertical: 10
   }
});

export default StartGameScreen;