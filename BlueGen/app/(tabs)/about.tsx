import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is an about page with my information
            </Text>
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
});
