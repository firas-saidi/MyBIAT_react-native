import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATInput } from "../components/BIATInput";
import { BIATButton } from "../components/BIATButton";
import { useNavigation } from "@react-navigation/native";

export const ProfileEditScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("Foulen Ben Foulen");
    const [email, setEmail] = useState("foulen.benfoulen@email.com");
    const [phone, setPhone] = useState("+216 98 123 456");
    const [address, setAddress] = useState("123 Rue de la République, Tunis");

    const handleSave = () => {
        // Simulate API call
        Alert.alert("Succès", "Vos informations ont été mises à jour.", [
            { text: "OK", onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <ScreenWrapper scrollable>
            <Header title="Modifier mon profil" showBack />
            <View className="p-4">
                <View className="items-center mb-8">
                    <View className="w-24 h-24 bg-primary rounded-full justify-center items-center mb-4">
                        <Text className="text-white text-3xl font-bold">FB</Text>
                    </View>
                    <Text className="text-primary font-medium">Changer la photo</Text>
                </View>

                <View className="mb-6">
                    <BIATInput
                        label="Nom complet"
                        value={name}
                        onChangeText={setName}
                        placeholder="Votre nom"
                    />
                    <BIATInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Votre email"
                    />
                    <BIATInput
                        label="Téléphone"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        placeholder="Votre numéro"
                    />
                    <BIATInput
                        label="Adresse"
                        value={address}
                        onChangeText={setAddress}
                        placeholder="Votre adresse"
                    />
                </View>

                <BIATButton title="Enregistrer" onPress={handleSave} />
            </View>
        </ScreenWrapper>
    );
};
