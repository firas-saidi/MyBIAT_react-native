import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { BIATInput } from "../components/BIATInput";
import { BIATButton } from "../components/BIATButton";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { Fingerprint } from "lucide-react-native";

export const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

    useEffect(() => {
        checkBiometricAvailability();
    }, []);

    const checkBiometricAvailability = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        setIsBiometricAvailable(compatible && enrolled);
    };

    const handleBiometricAuth = async () => {
        try {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: "Authentification biométrique",
                fallbackLabel: "Utilisez le mot de passe",
                cancelLabel: "Annuler",
            });

            if (result.success) {
                navigation.replace("Main");
            }
        } catch (error) {
            console.error("Biometric authentication error:", error);
        }
    };

    const handleLogin = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigation.replace("Main");
        }, 1500);
    };

    return (
        <ScreenWrapper className="bg-light">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 40 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="items-center mb-8">
                        {/* BIAT Logo */}
                        <View className="w-24 h-24 bg-primary rounded-full justify-center items-center mb-4 shadow-lg">
                            <Text className="text-white text-2xl font-bold">BIAT</Text>
                        </View>
                        <Text className="text-primary text-2xl font-bold">Bienvenue</Text>
                        <Text className="text-gray-500 mt-1 text-sm">
                            Connectez-vous à votre espace
                        </Text>
                    </View>

                    <View className="w-full">
                        <BIATInput
                            label="Identifiant"
                            placeholder="Entrez votre identifiant"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />
                        <BIATInput
                            label="Mot de passe"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity className="self-end mb-6">
                            <Text className="text-primary font-medium text-sm">Mot de passe oublié ?</Text>
                        </TouchableOpacity>

                        <BIATButton
                            title="Se connecter"
                            onPress={handleLogin}
                            isLoading={isLoading}
                            className="mb-4"
                        />

                        {isBiometricAvailable && (
                            <>
                                <View className="flex-row items-center mb-4">
                                    <View className="flex-1 h-[1px] bg-gray-300" />
                                    <Text className="mx-4 text-gray-400 text-sm">OU</Text>
                                    <View className="flex-1 h-[1px] bg-gray-300" />
                                </View>

                                <TouchableOpacity
                                    onPress={handleBiometricAuth}
                                    className="items-center py-4 border border-primary rounded-xl"
                                >
                                    <Fingerprint size={32} color="#003D8F" />
                                    <Text className="text-primary font-medium mt-2">
                                        Utiliser l'empreinte digitale
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>

                    <View className="mt-auto pb-10 items-center">
                        <Text className="text-gray-400 text-xs">Version 2.0.0</Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
};
