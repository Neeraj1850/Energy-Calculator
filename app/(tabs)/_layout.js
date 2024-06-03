import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            height: 70,
            backgroundColor: '#4F9C80',
            borderTopWidth: 0,
            elevation: 0,
            paddingBottom: 15
        },
        }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Appliance',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="fridge" size={30} color="white" />,
        }}
      />
      <Tabs.Screen
        name="UtilityBill"
        options={{
          title: 'Utility Bill',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: ({ color }) => <FontAwesome6 name="file-invoice-dollar" size={26} color="white" />,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: 'Help',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: ({ color }) => <FontAwesome6 name="circle-question" size={26} color="white" />,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: ({ color }) => <FontAwesome6 name="circle-info" size={26} color="white" />,
        }}
      />
    </Tabs>
  );
}
