import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATCard } from "../components/BIATCard";
import { BIATButton } from "../components/BIATButton";
import { CARDS } from "../constants/mockData";
import { Lock, Unlock, Settings, List } from "lucide-react-native";

export const CardsScreen = () => {
    const navigation = useNavigation();
    const renderCard = ({ item }: { item: any }) => (
        <View className="mb-8">
            {/* Visual Card Representation */}
            <View className="bg-primary h-48 rounded-2xl p-6 justify-between mb-6 shadow-xl mx-4">
                <View className="flex-row justify-between items-start">
                    <Text className="text-white font-bold text-lg">BIAT</Text>
                    <Text className="text-white font-bold italic">{item.type}</Text>
                </View>
                <View>
                    <Text className="text-white text-xl font-medium tracking-widest mb-2">
                        {item.number}
                    </Text>
                    <View className="flex-row justify-between items-end">
                        <View>
                            <Text className="text-white/60 text-xs">Titulaire</Text>
                            <Text className="text-white font-medium">{item.holder}</Text>
                        </View>
                        <View>
                            <Text className="text-white/60 text-xs">Expire fin</Text>
                            <Text className="text-white font-medium">{item.expiry}</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Actions Grid */}
            <View className="flex-row flex-wrap justify-between px-4">
                <BIATCard className="w-[48%] mb-4 p-4 items-center">
                    <View className="bg-red-100 p-3 rounded-full mb-2">
                        <Lock size={24} color="#dc3545" />
                    </View>
                    <Text className="font-bold text-dark">Bloquer</Text>
                </BIATCard>
                <TouchableOpacity
                    className="w-[48%] mb-4"
                    onPress={() => navigation.navigate("CardLimits" as never)}
                >
                    <BIATCard className="p-4 items-center">
                        <View className="bg-blue-100 p-3 rounded-full mb-2">
                            <Settings size={24} color="#003D8F" />
                        </View>
                        <Text className="font-bold text-dark">Plafonds</Text>
                    </BIATCard>
                </TouchableOpacity>
                <BIATCard className="w-[48%] mb-4 p-4 items-center">
                    <View className="bg-gray-100 p-3 rounded-full mb-2">
                        <List size={24} color="#1C1C1C" />
                    </View>
                    <Text className="font-bold text-dark">Historique</Text>
                </BIATCard>
                <BIATCard className="w-[48%] mb-4 p-4 items-center">
                    <View className="bg-green-100 p-3 rounded-full mb-2">
                        <Unlock size={24} color="#28a745" />
                    </View>
                    <Text className="font-bold text-dark">Code PIN</Text>
                </BIATCard>
            </View>
        </View>
    );

    return (
        <ScreenWrapper>
            <Header title="Mes Cartes" />
            <FlatList
                data={CARDS}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScreenWrapper>
    );
};
