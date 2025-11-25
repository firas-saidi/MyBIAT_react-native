import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { AccountsScreen } from "../screens/AccountsScreen";
import { AccountDetailsScreen } from "../screens/AccountDetailsScreen";
import { TransfersScreen } from "../screens/TransfersScreen";
import { CardsScreen } from "../screens/CardsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { TransferSuccessScreen } from "../screens/TransferSuccessScreen";
import { CardLimitsScreen } from "../screens/CardLimitsScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import { ProfileEditScreen } from "../screens/ProfileEditScreen";
import { Home, CreditCard, Send, Settings, Wallet } from "lucide-react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: "#FFFFFF",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 5,
                },
                tabBarActiveTintColor: "#003D8F",
                tabBarInactiveTintColor: "#A0A0A0",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Accounts"
                component={AccountsScreen}
                options={{
                    tabBarLabel: "Comptes",
                    tabBarIcon: ({ color, size }) => <Wallet color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Transfers"
                component={TransfersScreen}
                options={{
                    tabBarLabel: "Virements",
                    tabBarIcon: ({ color, size }) => <Send color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Cards"
                component={CardsScreen}
                options={{
                    tabBarLabel: "Cartes",
                    tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Paramètres",
                    tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "#F5F6FA" },
            }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
            <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} />
            <Stack.Screen
                name="TransferSuccess"
                component={TransferSuccessScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="CardLimits" component={CardLimitsScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        </Stack.Navigator>
    );
};
