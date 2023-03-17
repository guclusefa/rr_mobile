import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { colors } from '../styles/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        // color
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={
                {
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: 'gray',
                }
            }
            >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Profiles" component={ProfilesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Resources" component={ResourcesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;