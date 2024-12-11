import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>This is a new line of text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'peru',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
    },
});

