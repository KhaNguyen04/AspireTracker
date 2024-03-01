import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  View 
} from 'react-native'

// structure for test data
type Task = {
    data: {
      id: string;
      task: string;
      desc: string;
    };
}

const TaskReminder = ({ data } : Task) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded)
  };

  return (
    <View>
      <TouchableHighlight
        onPress={toggleExpand}
        style={styles.taskWrapper}
      >
        <>
          <Text style={styles.textWrapper}>
            <Text style={styles.taskLabel}>
              {data.task}
            </Text>
          </Text>
          {isExpanded && data.desc != null && (
            <Text style={styles.textWrapper}>
            <Text style={styles.taskText}>
              {data.desc}
            </Text>
          </Text>
          )}
        </>
      </TouchableHighlight>
    </View>
  )
}

// interface TaskProps {
//     goalName: string;
//     goalStatus?: string;
// };

// const TaskReminder = (props: TaskProps) => {
//   return (
//     <View style={styles.taskWrapper}>
//         <Text style={styles.taskLabel}>{props.goalName}</Text>
//         {/* <Text style={styles.taskText}>{props.goalStatus}</Text> */}
//     </View>
//   )
// }


const styles = StyleSheet.create({
    taskWrapper: {
      backgroundColor: '#3b4d64',
      padding: 20,
      borderRadius: 10,
      width: '100%',
      marginTop: 8,
    },
    taskLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    taskText: {
      fontSize: 13,
    },
    textWrapper: {
      color: '#fff'
    },
    touchableItem: {
      // borderRadius: 10,
      overflow: 'hidden'
    },
});
export default TaskReminder