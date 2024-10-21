import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#900C3F', // Background color for the header
        paddingVertical: 15,        // Vertical padding for spacing
        paddingHorizontal: 20,      // Horizontal padding
        alignItems: 'center',       // Center content horizontally
        justifyContent: 'center',   // Center content vertically
    },
    text: {
        color: '#FFFFFF',           // Text color (white)
        fontSize: 24,               // Larger font size
        fontWeight: 'bold',         // Bold font
        textTransform: 'uppercase', // Make the text uppercase
    },
});
