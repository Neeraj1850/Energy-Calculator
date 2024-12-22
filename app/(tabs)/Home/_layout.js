import { Stack, router } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack initialRouteName="index"
      screenOptions={{
      headerStyle: {
        backgroundColor: "#4F9C80",
        height: 0
      },
      headerShadowVisible: false,
    }}>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="Result" options={{ headerShown: false
      }} />
      <Stack.Screen name="Alternatives" options={{ headerShown: false
      }} />
    </Stack>
  );
}
