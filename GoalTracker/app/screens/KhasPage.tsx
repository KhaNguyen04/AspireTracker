import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const KhasPage = () =>{
    return (
        <View style={styles.container}>
            <Link href="/">Index</Link>
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

export default KhasPage;
