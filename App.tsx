import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import AboutApp from "./component/review/about"
import HomeApp from "./component/review/home"
import DetailApp from "./component/review/detail"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
const App = () => {
    const [loaded, error] = useFonts({
        'Inter-Black': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <AboutApp />
            <HomeApp />
            <DetailApp />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 55
    }
})

export default App