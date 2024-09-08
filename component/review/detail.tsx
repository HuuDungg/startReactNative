import { View } from "react-native"
import { Text } from "react-native-elements"
import { FONT_REGULAR } from "../../utils/const"

const DetailApp = () => {
    return (
        <>
            <View>
                <Text style={{
                    fontFamily: FONT_REGULAR
                }}>this is detail page</Text>
            </View>
        </>
    )
}

export default DetailApp