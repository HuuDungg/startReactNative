import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import { FONT_REGULAR } from "../../utils/const"

const DetailApp = ({ navigation }: any) => {
    return (
        <>
            <View>
                <Text style={{
                    fontFamily: FONT_REGULAR
                }}>this is detail page</Text>
                <Button
                    title="Go to about"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </>
    )
}

export default DetailApp