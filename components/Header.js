import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import BodyText from './BodyText';

const Header = () => {
    return (
        <View style={styles.header}>
            <BodyText><Text style={styles.title}>Guess a Number</Text></BodyText>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 15,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'       
    },
    title: {
        color: 'white',
        fontSize: 30
      }
});

export default Header;