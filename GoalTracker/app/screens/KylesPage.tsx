import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, SectionList} from 'react-native';
import TaskReminder from '../../components/TaskReminder';

const TEST = [{
    title: "DAILY",
    data: [
      {
        id: "1",
        task: "Buy groceries"
      },
      {
        id: "2",
        task: "Feed Cat"
      },
      {
        id: "3",
        task: "Sleep for 3 hours"
      },
      {
        id: "4",
        task: "Water Plants"
      },
      {
        id: "5",
        task: "Drink Water"
      },
    ]
}];

const KylesPage = () =>{
    return (
        <View style={styles.container}>
            <Link href="/">Index</Link>
            {/* check if task list is empty
                if yes then render a message, else render tasks
            */}
            <View style={styles.taskContainer}>
                <SectionList
                    sections={TEST}
                    keyExtractor={(item) => item.id}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.labelFont}>{section.title}</Text>
                    )}
                    renderItem={({item}) => (
                        <TaskReminder goalName={item.task}/>
                    )}
                />
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
    },
    labelFont: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
});

export default KylesPage;
