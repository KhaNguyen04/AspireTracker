import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const DavidsPage = () =>{
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    //go to main page
                    navigation.navigate('Main Page')
                }}>
                <Text>Go back to main page</Text>
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

export default DavidsPage;