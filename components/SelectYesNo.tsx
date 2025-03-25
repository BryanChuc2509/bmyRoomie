import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
export default function App() {

    const [Enable, setEnable] = useState("no");

    return (
        <View className='w-full bg-[#E5E5E540] mt-2 p-3 border-[#4840A3] border-b ' >
            <Text className='text-[12px] text-gray-700'>¿Deseas continuar?</Text>
            <Picker
                className='bg-transparent '
                selectedValue={Enable}
                mode={"dialog"}
                onValueChange={(itemValue) => setEnable(itemValue)}
            >
                <Picker.Item label="no" value="no" />
                <Picker.Item label="si" value="si" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
