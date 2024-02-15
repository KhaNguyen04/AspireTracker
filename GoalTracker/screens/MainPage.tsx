import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import VictorsScreen from './VictorsPage';

const MainPageNav = () =>{
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}
              onPress={() => {
                  //go to victors page
                  navigation.navigate('Victors Page')
              }}>
                  <Text style={styles.sectionTitle}>Victor's Page</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => {
                  navigation.navigate('Davids Page')
              }}>
              <Text style={styles.sectionTitle}>David's Page</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}
              onPress={() => {
                  navigation.navigate('Khas Page')
              }}>
              <Text style={styles.sectionTitle}>Kha's Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => {
                  navigation.navigate('Kyles Page')
              }}>
              <Text style={styles.sectionTitle}>Kyle's Page</Text>
          </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        marginTop: 8.
    },
    sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#989898',
  }
});

export default MainPageNav;
