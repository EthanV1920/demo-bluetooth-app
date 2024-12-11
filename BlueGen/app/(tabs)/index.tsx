import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text>This is a new line of text</Text>
            <Link href="/about" style={styles.button}>
                About Page
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'peru',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
    },
    button: {
        fontSize: 24,
        textDecorationLine: 'underline',
        color: 'blue',

    },
});

