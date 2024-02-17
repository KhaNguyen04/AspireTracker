import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TaskReminder from '../../components/TaskReminder';
import { StatusBar } from 'expo-status-bar';

const KylesPage = () =>{
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.labelFont}>Index</Link>
            {/* check if task list is empty
                if yes then render a message, else render tasks
            */}
            <View style={styles.taskContainer}>
                <Text style={styles.labelFont}>
                    DAILY
                </Text>
                <TaskReminder goalName='basketball'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginTop: 8,
    },
    taskContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    labelFont: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
});

export default KylesPage;
