import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="screens/VictorsPage">Victors Page</Link>
      <Link href="screens/KhasPage">Khas Page</Link>
      <Link href="screens/KylesPage">Kyles Page</Link>
      <Link href="screens/DavidsPage">Davids Page</Link>
    </View>
  );
}
