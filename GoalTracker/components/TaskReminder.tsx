import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TaskProps {
    goalName: string;
    goalDesc?: string;
};

const TaskReminder = (props: TaskProps) => {
  return (
    <View>
        <Text>get your {props.goalName}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    taskWrapper: {
      backgroundColor: '#3b4d64',
      padding: 20,
      marginHorizontal: 16,
    },
    taskLabel: {
        color: '#fff',
        fontSize: 24,
    }
});
export default TaskReminder