import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {Pressable, View, Text, Modal, StyleSheet} from "react-native";

import {useState} from "react";

export default function RootLayout() {
    const [isModalVisible, setIsModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index"
          options={{
              headerRight: () => (
                  <Pressable onPress={() => setIsModalVisible(true)}>
                      <Text>Knapp?</Text>
                  </Pressable>
              ),
          }}/>
        <Stack.Screen name="+not-found" />
      </Stack>

        <Modal visible={isModalVisible} transparent={true} animationType={'slide'}>
            <View style={styles.modalContainer}>
                <Pressable onPress={() => setIsModalVisible(false)}>
                    <Text style={styles.modalText}>Close this now</Text>
                </Pressable>
            </View>
        </Modal>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        color: 'white',
        fontSize: 18,
        padding: 12,
        backgroundColor: 'black',
        borderRadius: 8,
    },
});