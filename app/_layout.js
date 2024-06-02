import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
///import * as SplashScreen from "expo-splash-screen";

//SplashScreen.preventAutoHideAsync();

const layout = () =>{
    const [fontsLoaded] = useFonts({
        InterLight: require('./fonts/Inter-Light.ttf'),
        InterBold: require('./fonts/Inter-Bold.ttf'),
        InterRegular: require('./fonts/Inter-Regular.ttf'),
        InterSemiBold: require('./fonts/Inter-SemiBold.ttf')

    })
    const onLayoutRootView = useCallback(async() => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout ={onLayoutRootView}/>
}



export default layout;