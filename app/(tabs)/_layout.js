import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: '#D9D9D9',
            height: 60,
            borderRadius: 20,
            bottom: 10,
            left:10,
            right:10,
            position: 'absolute'
        }
        }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Appliance',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="fridge-outline" size={26} color='black' />,
        }}
      />
      <Tabs.Screen
        name="UtilityBill"
        options={{
          title: 'Utility Bill',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome6 name="dollar" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: 'Help',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="help-circle" size={26} color="black" />,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="info" size={26} color="black" />,
        }}
      />
    </Tabs>
  );
}
