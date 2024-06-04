import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Svg, Path } from 'react-native-svg';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
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
          tabBarIcon: () => <MaterialCommunityIcons name="fridge" size={30} color="white" />,
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
          tabBarIcon: () => <FontAwesome6 name="file-invoice-dollar" size={26} color="white" />,
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
          tabBarIcon: () => <Icon/>,
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
          tabBarIcon: () => <FontAwesome6 name="circle-info" size={26} color="white" />,
        }}
      />
    </Tabs>
  );
}

const Icon = () => {
  return(
    <Svg width="27" height="27" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M15.375 30C19.3532 30 23.1686 28.4196 25.9816 25.6066C28.7946 22.7936 30.375 18.9782 30.375 15C30.375 11.0218 28.7946 7.20644 25.9816 4.3934C23.1686 1.58035 19.3532 0 15.375 0C11.3968 0 7.58144 1.58035 4.7684 4.3934C1.95535 7.20644 0.375 11.0218 0.375 15C0.375 18.9782 1.95535 22.7936 4.7684 25.6066C7.58144 28.4196 11.3968 30 15.375 30ZM10.3242 9.68555C10.7871 8.37891 12.0293 7.5 13.418 7.5H16.834C18.8789 7.5 20.5312 9.1582 20.5312 11.1973C20.5312 12.5215 19.8223 13.7461 18.6738 14.4082L16.7812 15.4922C16.7695 16.2539 16.1426 16.875 15.375 16.875C14.5957 16.875 13.9688 16.248 13.9688 15.4688V14.6777C13.9688 14.1738 14.2383 13.7109 14.6777 13.459L17.2734 11.9707C17.5488 11.8125 17.7188 11.5195 17.7188 11.2031C17.7188 10.7109 17.3203 10.3184 16.834 10.3184H13.418C13.2188 10.3184 13.043 10.4414 12.9785 10.6289L12.9551 10.6992C12.6973 11.4316 11.8887 11.8125 11.1621 11.5547C10.4355 11.2969 10.0488 10.4883 10.3066 9.76172L10.3301 9.69141L10.3242 9.68555ZM13.5 20.625C13.5 20.1277 13.6975 19.6508 14.0492 19.2992C14.4008 18.9475 14.8777 18.75 15.375 18.75C15.8723 18.75 16.3492 18.9475 16.7008 19.2992C17.0525 19.6508 17.25 20.1277 17.25 20.625C17.25 21.1223 17.0525 21.5992 16.7008 21.9508C16.3492 22.3025 15.8723 22.5 15.375 22.5C14.8777 22.5 14.4008 22.3025 14.0492 21.9508C13.6975 21.5992 13.5 21.1223 13.5 20.625Z" fill="white"/>
    </Svg>

  )
}