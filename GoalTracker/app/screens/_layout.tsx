import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { View } from 'react-native';
// just playing around with layouts

import Colors from '../../constants/Colors';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.light.background,
        },
        // hide heading label
        headerShown: false,
      }
      }>
    </Stack>
  );
}