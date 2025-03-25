import { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function ImagePickerComponent() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const deleteImage = () => setImage(null)

    return (
        <View  >
            {!image ? <TouchableOpacity className='rounded-lg bg-[#E5E5E540] justify-center items-center h-[250px]' onPress={pickImage} >
                <View className='w-full text-center flex items-center '>
                    <FontAwesome6 name='images' size={40} color={'#4840A3'} />
                    <Text className='w-[200px] text-center text-gray-400 text-lg  mt-1 '>Añade una imagen de la vista de la propiedad</Text>
                </View>
            </TouchableOpacity> :
                <View className="relative">
                    <TouchableHighlight className="absolute z-50 top-5 right-5" onPress={deleteImage}>
                        <FontAwesome name='close' color={'white'} size={25} />
                    </TouchableHighlight>
                    <Image className="w-full h-[250px] rounded-lg" source={{ uri: image }}   resizeMode="cover"  />
                </View>

            }
            {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}

        </View>
    );
}

