import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впишите задачу..."
                placeholderTextColor="#900C3F" // Customize placeholder color
            />
            <Button
                color="#900C3F"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#900C3F',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRigthWidth: 0,
        paddingLeft: 10,
        color: '#900C3F',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        marginTop:20,
    },
});
