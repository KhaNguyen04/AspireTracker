import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import VictorsScreen from './screens/VictorsPage';
import MainScreen from './screens/MainPage'
import { SafeAreaView } from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator();

export default function App() {
  console.log("App Executed")
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main Page">
        <RootStack.Screen name='Victors Page' component={VictorsScreen}/>
        <RootStack.Screen name='Main Page' component={MainScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={backgroundStyles.container}>
    //   <View style={styles.container}>
    //     <Text>Open up App.tsx to start working on your app! Hello World4</Text>
    //     <TouchableOpacity>
    //       <Text>Go to Next Page</Text>
    //     </TouchableOpacity>
    //     <StatusBar style="auto" />
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const backgroundStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

