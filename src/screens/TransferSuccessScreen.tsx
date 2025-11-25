import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Check } from "lucide-react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { BIATButton } from "../components/BIATButton";
import type { RootStackParamList } from "../types/navigation";

export const TransferSuccessScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ScreenWrapper className="justify-center items-center px-6 bg-primary">
            <View
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 32,
                }}
            >
                <Check size={64} color="#003D8F" strokeWidth={3} />
            </View>

            <View style={{ alignItems: "center", width: "100%" }}>
                <Text className="text-white text-3xl font-bold mb-4 text-center">
                    Transfert Réussi !
                </Text>
                <Text className="text-white/80 text-lg text-center mb-12">
                    Votre virement a été effectué avec succès.
                </Text>

                <BIATButton
                    title="Retour à l'accueil"
                    onPress={() => navigation.navigate("Main", { screen: "Home" })}
                    variant="secondary"
                    className="w-full mb-4"
                />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="text-white font-medium text-lg">Effectuer un autre virement</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
};
