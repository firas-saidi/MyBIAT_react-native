import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATInput } from "../components/BIATInput";
import { BIATButton } from "../components/BIATButton";
import { ChevronDown } from "lucide-react-native";

export const TransfersScreen = () => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [step, setStep] = useState(1);

    const navigation = useNavigation();

    const handleNext = () => {
        if (step < 2) setStep(step + 1);
        else {
            // Submit transfer
            navigation.navigate("TransferSuccess" as never);
            // Reset form
            setStep(1);
            setAmount("");
            setDescription("");
        }
    };

    return (
        <ScreenWrapper scrollable>
            <Header title="Virements" />

            <View className="px-4 mt-4">
                {/* Progress Indicator */}
                <View className="flex-row justify-between mb-8">
                    <View className="flex-1 items-center">
                        <View
                            className={`w-8 h-8 rounded-full justify-center items-center mb-1 ${step >= 1 ? "bg-primary" : "bg-gray-200"
                                }`}
                        >
                            <Text className="text-white font-bold">1</Text>
                        </View>
                        <Text className="text-xs text-dark">Saisie</Text>
                    </View>
                    <View className="w-10 h-[2px] bg-gray-200 self-center mb-4" />
                    <View className="flex-1 items-center">
                        <View
                            className={`w-8 h-8 rounded-full justify-center items-center mb-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"
                                }`}
                        >
                            <Text className="text-white font-bold">2</Text>
                        </View>
                        <Text className="text-xs text-dark">Confirmation</Text>
                    </View>
                </View>

                {step === 1 ? (
                    <View>
                        <Text className="text-lg font-bold text-dark mb-4">
                            Compte à débiter
                        </Text>
                        <TouchableOpacity className="bg-white p-4 rounded-xl border border-gray-200 flex-row justify-between items-center mb-6">
                            <View>
                                <Text className="text-dark font-bold">Compte Chèque</Text>
                                <Text className="text-gray-500 text-sm">1 250,500 TND</Text>
                            </View>
                            <ChevronDown size={20} color="#003D8F" />
                        </TouchableOpacity>

                        <Text className="text-lg font-bold text-dark mb-4">Bénéficiaire</Text>
                        <TouchableOpacity className="bg-white p-4 rounded-xl border border-gray-200 flex-row justify-between items-center mb-6">
                            <Text className="text-gray-500">Sélectionner un bénéficiaire</Text>
                            <ChevronDown size={20} color="#003D8F" />
                        </TouchableOpacity>

                        <Text className="text-lg font-bold text-dark mb-4">Détails</Text>
                        <BIATInput
                            label="Montant (TND)"
                            placeholder="0.000"
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={setAmount}
                        />
                        <BIATInput
                            label="Motif"
                            placeholder="Ex: Loyer, Remboursement..."
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>
                ) : (
                    <View className="bg-white p-6 rounded-xl shadow-sm mb-6">
                        <Text className="text-center text-lg font-bold text-dark mb-6">
                            Récapitulatif
                        </Text>
                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-500">Compte à débiter</Text>
                            <Text className="font-bold text-dark">Compte Chèque</Text>
                        </View>
                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-500">Bénéficiaire</Text>
                            <Text className="font-bold text-dark">Foulen Ben Foulen</Text>
                        </View>
                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-500">Montant</Text>
                            <Text className="font-bold text-primary text-lg">{amount} TND</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500">Motif</Text>
                            <Text className="font-bold text-dark">{description}</Text>
                        </View>
                    </View>
                )}

                <BIATButton
                    title={step === 1 ? "Suivant" : "Confirmer"}
                    onPress={handleNext}
                    className="mt-4"
                />
            </View>
        </ScreenWrapper>
    );
};
