import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={StyleSheet.body}>{props.children}</Text>;

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-lato',
        fontSize: 20
    }
});

export default BodyText;