import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TaskProps {
    goalName: string;
    goalStatus?: string;
};

const TaskReminder = (props: TaskProps) => {
  return (
    <View style={styles.taskWrapper}>
        <Text style={styles.taskLabel}>{props.goalName}</Text>
        <Text style={styles.taskText}>{props.goalStatus}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    taskWrapper: {
      backgroundColor: '#3b4d64',
      padding: 20,
      borderRadius: 10,
      width: '100%',
      marginTop: 8,
    },
    taskLabel: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    taskText: {
      color: '#fff',
    },
});
export default TaskReminder