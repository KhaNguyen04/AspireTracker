import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const VictorPageNav = () =>{
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    //go to main page
                    navigation.navigate('Main Page')
                }}>
                <Text>Main Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        marginTop: 8.
    },
});

export default VictorPageNav;
