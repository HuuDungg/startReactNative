import { StyleSheet, Text, View } from "react-native"

const FlexBox = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text>This is flex box</Text>
                </View>
                <View style={styles.item2}>
                    <Text>This is flex box</Text>
                </View>
                <View style={styles.item3}>
                    <Text>This is flex box</Text>
                </View>
                <View style={styles.item4}>
                    <Text>This is flex box</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item1: {
        backgroundColor: 'red',
        padding: 5
    },
    item2: {
        backgroundColor: 'violet',
        padding: 5
    },
    item3: {
        backgroundColor: 'gray',
        padding: 5
    },
    item4: {
        backgroundColor: 'green',
        padding: 5
    },
})
export default FlexBox