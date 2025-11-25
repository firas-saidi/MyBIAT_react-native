import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATCard } from "../components/BIATCard";
import { useNavigation } from "@react-navigation/native";
import {
    User,
    Bell,
    Lock,
    HelpCircle,
    LogOut,
    ChevronRight,
} from "lucide-react-native";

export const SettingsScreen = () => {
    const navigation = useNavigation<any>();

    const handleLogout = () => {
        Alert.alert("Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", [
            { text: "Annuler", style: "cancel" },
            {
                text: "Déconnexion",
                style: "destructive",
                onPress: () => navigation.replace("Login"),
            },
        ]);
    };

    const SettingItem = ({
        icon: Icon,
        label,
        color = "#1C1C1C",
        onPress,
    }: {
        icon: any;
        label: string;
        color?: string;
        onPress?: () => void;
    }) => (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center justify-between py-4 border-b border-gray-100"
        >
            <View className="flex-row items-center">
                <View className="bg-gray-50 p-2 rounded-lg mr-3">
                    <Icon size={20} color={color} />
                </View>
                <Text className="text-dark font-medium text-base">{label}</Text>
            </View>
            <ChevronRight size={20} color="#A0A0A0" />
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper>
            <Header title="Paramètres" />

            <View className="px-4 mt-4">
                {/* Profile Card */}
                <BIATCard className="flex-row items-center mb-8">
                    <View className="w-16 h-16 bg-primary rounded-full justify-center items-center mr-4">
                        <Text className="text-white text-xl font-bold">FB</Text>
                    </View>
                    <View>
                        <Text className="text-lg font-bold text-dark">Foulen Ben Foulen</Text>
                        <Text className="text-gray-500">foulen.benfoulen@email.com</Text>
                    </View>
                </BIATCard>

                {/* Settings List */}
                <View className="bg-white rounded-xl px-4 shadow-sm mb-8">
                    <SettingItem
                        icon={User}
                        label="Mon Profil"
                        onPress={() => navigation.navigate("ProfileEdit")}
                    />
                    <SettingItem
                        icon={Bell}
                        label="Notifications"
                        onPress={() => navigation.navigate("Notifications")}
                    />
                    <SettingItem icon={Lock} label="Sécurité & Mot de passe" />
                    <SettingItem icon={HelpCircle} label="Aide & Support" />
                </View>

                <TouchableOpacity
                    onPress={handleLogout}
                    className="flex-row items-center justify-center bg-red-50 p-4 rounded-xl"
                >
                    <LogOut size={20} color="#dc3545" className="mr-2" />
                    <Text className="text-danger font-bold text-lg">Se déconnecter</Text>
                </TouchableOpacity>

                <Text className="text-center text-gray-400 text-sm mt-8">
                    BIAT Mobile v2.0.0
                </Text>
            </View>
        </ScreenWrapper>
    );
};
