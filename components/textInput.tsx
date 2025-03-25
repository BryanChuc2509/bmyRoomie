import * as React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { List } from 'react-native-paper';
import SelectYesNo from './SelectYesNo';

const MyComponent = () => {
    const [text, setText] = React.useState("");

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <TextInput
                label="Titulo de la propiedad"
                value={text}
                onChangeText={text => setText(text)}
                selectionColor="#fff"
                style={{
                    backgroundColor: '#E5E5E540',
                    marginTop: 10,
                }}
                underlineStyle={{
                    backgroundColor: '#4840A3',
                }}
                keyboardType='default'
            />
            <TextInput
                label="Contacto"
                value={text}
                onChangeText={text => setText(text)}
                selectionColor="#fff"
                style={{
                    backgroundColor: '#E5E5E540',
                    marginTop: 10,
                }}
                underlineStyle={{
                    backgroundColor: '#4840A3',
                }}
                keyboardType='default'
            />
            <TextInput
                label="Disponible"
                value={text}
                onChangeText={text => setText(text)}
                selectionColor="#fff"
                style={{
                    backgroundColor: '#E5E5E540',
                    marginTop: 10,
                }}
                underlineStyle={{
                    backgroundColor: '#4840A3',
                }}
                keyboardType='default'
            />

            <SelectYesNo />

            <View className='w-full mt-2 flex flex-row gap-2 mb-2 ' >
                <TextInput
                    label="Precio"
                    value={text}
                    onChangeText={text => setText(text)}
                    selectionColor="#fff"
                    style={{
                        backgroundColor: '#E5E5E540',
                        flex: 1,
                    }}
                    underlineStyle={{
                        backgroundColor: '#4840A3',
                    }}
                    keyboardType='number-pad'
                />
                <TextInput
                    label="Modalidad"
                    value={text}
                    onChangeText={text => setText(text)}
                    selectionColor="#fff"
                    style={{
                        backgroundColor: '#E5E5E540',
                        flex: 1,
                    }}
                    underlineStyle={{
                        backgroundColor: '#4840A3',
                    }}
                    keyboardType='default'
                />
            </View>


        </View>
    );
};

export default MyComponent;