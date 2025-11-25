import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATButton } from "../components/BIATButton";
import { useNavigation } from "@react-navigation/native";

export const CardLimitsScreen = () => {
    const navigation = useNavigation();
    const [onlinePayment, setOnlinePayment] = useState(true);
    const [contactless, setContactless] = useState(true);
    const [withdrawalLimit, setWithdrawalLimit] = useState(500);

    return (
        <ScreenWrapper>
            <Header title="Plafonds & Services" showBack />
            <View className="p-4">
                <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
                    <Text className="text-lg font-bold text-dark mb-4">Services Carte</Text>

                    <View className="flex-row justify-between items-center mb-6">
                        <View className="flex-1 mr-4">
                            <Text className="text-base font-medium text-dark">Paiement en ligne</Text>
                            <Text className="text-sm text-gray-500">Activer les paiements sur internet</Text>
                        </View>
                        <Switch
                            value={onlinePayment}
                            onValueChange={setOnlinePayment}
                            trackColor={{ false: "#767577", true: "#003D8F" }}
                            thumbColor={onlinePayment ? "#FBB600" : "#f4f3f4"}
                        />
                    </View>

                    <View className="flex-row justify-between items-center">
                        <View className="flex-1 mr-4">
                            <Text className="text-base font-medium text-dark">Sans contact</Text>
                            <Text className="text-sm text-gray-500">Paiement sans contact (NFC)</Text>
                        </View>
                        <Switch
                            value={contactless}
                            onValueChange={setContactless}
                            trackColor={{ false: "#767577", true: "#003D8F" }}
                            thumbColor={contactless ? "#FBB600" : "#f4f3f4"}
                        />
                    </View>
                </View>

                <View className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
                    <Text className="text-lg font-bold text-dark mb-4">Plafond de retrait</Text>
                    <Text className="text-3xl font-bold text-primary text-center mb-2">{withdrawalLimit} TND</Text>
                    <Text className="text-sm text-gray-500 text-center mb-6">Par semaine</Text>

                    <View className="flex-row justify-between">
                        <BIATButton
                            title="- 100"
                            onPress={() => setWithdrawalLimit(Math.max(0, withdrawalLimit - 100))}
                            variant="outline"
                            className="w-[45%] h-10"
                        />
                        <BIATButton
                            title="+ 100"
                            onPress={() => setWithdrawalLimit(withdrawalLimit + 100)}
                            variant="outline"
                            className="w-[45%] h-10"
                        />
                    </View>
                </View>

                <BIATButton
                    title="Enregistrer les modifications"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </ScreenWrapper>
    );
};
