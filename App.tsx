import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import AboutApp from "./component/review/about"
import HomeApp from "./component/review/home"
import DetailApp from "./component/review/detail"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { FONT_REGULAR } from "./utils/const"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



SplashScreen.preventAutoHideAsync();
const App = () => {
    const [loaded, error] = useFonts({
        [FONT_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeApp} />
                <Stack.Screen name="Detail1" component={DetailApp} options={{ title: 'Mov mov mov', animation: "simple_push" }} />
                <Stack.Screen name="About" component={AboutApp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 55
    }
})

export default App