import React from 'react';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';

const VictorPageNav = () =>{
    return (
       
        
        

        <View style={styles.container}>
            <View style={styles.backButton}>
            <Link href="/" asChild>
              <Pressable>
                <Text>Back</Text>
              </Pressable>
            </Link>            
            </View>
            
            <Link href="screens/KhasPage" asChild>
              <TouchableOpacity style={styles.buttonContent}>
                <Image source={require('../../assets/template.png')} style={styles.image}/>
                <Text style={styles.title}>Use a Template</Text>
              </TouchableOpacity>
           </Link>

            <Link style = {styles.buttonContent} href="screens/DavidsPage" asChild>
              <TouchableOpacity style={styles.buttonContent}>
                <Image source={require('../../assets/arrowTarget.png')} style={styles.image}/>
                <Text style={styles.title}>Create Custom Goal</Text>
              </TouchableOpacity>
           </Link>
        </View>

            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        //padding: 16,
        //marginTop: 8.
    },
    backButton: {
      backgroundColor: '#d6d0ec',
      padding: 10,
    },
    buttonContent: {
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 40,
      alignItems: 'center',
      backgroundColor: '#848990',
      padding: 10,
      margin: 10,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
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
    image: {
      borderRadius: 100,
      width: 100,
      height: 100,
    }
});

export default VictorPageNav;
