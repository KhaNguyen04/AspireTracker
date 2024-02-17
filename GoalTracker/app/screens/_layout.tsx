import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { View } from 'react-native';
// just playing around with layouts
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: '#0e2132',
        },
        // hide heading label
        // headerShown: false,
      }
      }>
    </Stack>
  );
}