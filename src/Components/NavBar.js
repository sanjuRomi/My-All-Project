import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/SvgImages/BackIcon';

const NavBar = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title || ''}
            </Text>
            <View style={{ width: 13 }} />
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomColor: 'black',
        backgroundColor: 'white',
        shadowColor: '#000',

        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
});
