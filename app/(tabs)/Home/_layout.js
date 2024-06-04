import { Stack } from "expo-router";


export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Result" options={{ headerShown: false
      }} />
      <Stack.Screen name="Alternatives" options={{ headerShown: false
      }} />
    </Stack>
  );
}
