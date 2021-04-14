import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import GalleryScreen from './screens/GalleryScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GalleryStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#76c2c4' }, headerTintColor: '#3E4545'
            }}
        >
            <Stack.Screen
                name='Gallery'
                component={GalleryScreen}
            />
            <Stack.Screen
                name='Details'
                component={DetailsScreen}
                options={({ route }) => {
                    const title = route.params.title;
                    return {
                        headerBackTitle: null,
                        headerTruncatedBackTitle: null,
                        headerTitle: title
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#3E4545',
                    style: { backgroundColor: '#76c2c4' }
                }}
            >
                <Tab.Screen
                    name="Gallery"
                    component={GalleryStack}
                    options={{
                        title: 'Gallery',
                        tabBarIcon: ({ focused, size, color }) => (
                            <Icon.AntDesign
                                name="picture"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Settings',
                        tabBarIcon: ({ focused, size, color }) => (
                            <Icon.Ionicons
                                name="settings"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
