import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Appearance, useColorScheme, StyleSheet } from 'react-native';

export default function Page() {
  const colorScheme = useColorScheme();
  //const colorScheme = 'light';

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
    <View style={[styles.container,themeContainerStyle]}>
      <Link style={[styles.text,themeTextStyle]} href="screens/VictorsPage">Victors Page</Link>
      <Link style={[styles.text,themeTextStyle]} href="screens/KhasPage">Khas Page</Link>
      <Link style={[styles.text,themeTextStyle]} href="screens/KylesPage">Kyles Page</Link>
      <Link style={[styles.text,themeTextStyle]} href="screens/DavidsPage">Davids Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
