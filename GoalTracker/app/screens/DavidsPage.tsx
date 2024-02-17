import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable, TextInput, Switch} from 'react-native';

const DavidsPage = () => {

  const [isDescriptionEnabled, setIsDescriptionEnabled] = useState(false);
  const [goal, setGoal] = useState("");
  const [goalError, setGoalError] = useState(false);
  const [description, setDescription] = useState("");


  const toggleDescription = () => {
    setIsDescriptionEnabled((prevState) => !prevState);
  }

  const descriptionElement = (
    <View style={styles.descriptionContainer}>
      <Text style={styles.inputName}>DESCRIPTION</Text>
      <TextInput
        placeholder='Enter'
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
    </View>
  );


    return (
        <View style={styles.container}>
          <View style={styles.backButton}>
            <Link href="/" asChild>
              <Pressable>
                <Text>Back</Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.addGoalContainer}>
            <Text style={styles.title}>GOAL NAME</Text>
            <Text style={styles.titleDescription}>Pick a simple name that suits you like Running or Yoga</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputName}>NAME</Text>
              <TextInput
                placeholder='Enter'
                value={goal}
                onChangeText={(text) => setGoal(text)}
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  minWidth: '80%',
                  padding: 10,
                  borderColor: goal.length > 0 ? '#000' : 'red',
                }}
              />
              {!goal && <Text style={styles.goalErrorMesage}>REQUIRED</Text>}
            </View>

            <View style={styles.toggleContainer}>
              <Text>Want to add a description? Maybe a few words to remind you of your goal.</Text>
              <Switch
                trackColor={{false: '#767577', true: '#50C878'}}
                thumbColor={isDescriptionEnabled ? '#355E3B' : '#f4f3f4'}
                onValueChange={toggleDescription}
                value={isDescriptionEnabled}
              />
            </View>
            
            {
              isDescriptionEnabled && descriptionElement
            }

          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efefef',
    },
    backButton: {
      backgroundColor: '#fff',
      padding: 10,
    },
    addGoalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    titleDescription: {},
    inputContainer: {
      marginTop: 50,
    },
    inputName: {
      fontSize: 12,
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      minWidth: '80%',
      padding: 10,
    },
    goalErrorMesage: {
      color: 'red',
      fontSize: 12,
      fontWeight: '500',
      textAlign: 'center',
    },
    toggleContainer: {
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '70%',
    },

    descriptionContainer: {
      marginTop: 36,
    },
});

export default DavidsPage;
