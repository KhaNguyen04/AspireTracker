import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const VictorPageNav = () =>{
    return (
        <View style={styles.container}>
            <Link href="/">Index</Link>
            <Link href="screens/DavidsPage">Create Custom Goal</Link>

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
