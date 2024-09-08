import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import * as React from 'react';


const HomeApp = ({ navigation }: any) => {
    return (
        <>
            <View>
                <Text>this is home page</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Detail1')}
                />
            </View>
        </>
    )
}

export default HomeApp