import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = props => {
    return (
        <View style={styles.headerTitle}>
            <Text>{props.title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    headerTitle : {
        width: '90%',
        height: 90,
    }
});

export default Header;