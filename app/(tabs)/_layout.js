import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import HelpIcon from '../svgs/helpIcon';
import { Ionicons } from '@expo/vector-icons';
import AppName from '../components/AppName';
import { router } from 'expo-router';

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          headerTitle: () => <AppName/>,
                headerLeft: router.canGoBack() ? () =>
                    <Ionicons 
                      name="arrow-back-sharp" 
                      size={24} color="white"
                      style={{
                        paddingLeft: 20
                      }}
                      onPress={ () => router.back()}/> : null,
                headerStyle: {
                    backgroundColor: '#4F9C80',
                    borderBottomWidth: 0,
                    elevation: 0,
                    height: 100
                },
                headerTitleAlign: 'center',
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
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: () => <MaterialCommunityIcons name="fridge" size={30} color="white" />,
        }}
      />
      <Tabs.Screen
        name="UtilityBill"
        options={{
          title: 'Utility Bill',
          headerShown: true,
          headerLeft: () => null,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: () => <FontAwesome6 name="file-invoice-dollar" size={26} color="white" />,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: 'Help',
          headerShown: true,
          headerLeft: () => null,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: () => <HelpIcon/>,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          headerShown: true,
          headerLeft: () => null,
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white'
          },
          tabBarIcon: () => <FontAwesome6 name="circle-info" size={26} color="white" />,
        }}
      />
    </Tabs>
  );
}