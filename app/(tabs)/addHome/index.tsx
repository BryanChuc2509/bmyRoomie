import ImagePickerComponent from '@/components/ImagePicker';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextInput from '@/components/textInput';

export default function AddHome() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      {/* <StatusBar style="dark" backgroundColor="#ffffff" /> */}
      <ScrollView>
        <View className='flex-1 pt-6 px-4 bordered bg-[#fff] ' >
          <View className='flex justify-center items-center mb-3'>
            <Text className='bg-[#4840A3] text-white text-md p-2 w-fit rounded-md '>Agrega tu propiedad</Text>
          </View>
          <ImagePickerComponent />
          <TextInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



// Estilos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Espaciado desde los bordes
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espacio entre el texto y el ImagePickerComponent
  },
});
