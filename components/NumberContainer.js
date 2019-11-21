import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
                <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        
        width: 45,
        borderWidth: 2,
        borderColor: Colors.accent,
        paddingTop: 5,
        borderRadius: 10,
        marginVertical: 18,
        alignItems: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
        paddingBottom: 5
        
    }
});

export default NumberContainer;