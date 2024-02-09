import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const VictorPageNav = () =>{
    return (
        <View style={styles.container}>
            <Text>Main Page 1</Text>
            <TouchableOpacity
                onPress={() => {
                    //go to main page
                }}>
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
