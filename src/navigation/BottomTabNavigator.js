import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

import { colors } from '../styles/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarActiveTintColor: colors.primary
                }
            }
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    title: 'Accueil',
                }}
            />
            <Tab.Screen name="Profiles" component={ProfilesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                    title: 'Profils',
                }}
            />
            <Tab.Screen name="Resources" component={ResourcesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                    title: 'Ressources',
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;