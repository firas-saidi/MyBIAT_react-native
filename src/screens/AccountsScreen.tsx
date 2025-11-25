import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { BIATCard } from "../components/BIATCard";
import { ACCOUNTS } from "../constants/mockData";
import { useNavigation } from "@react-navigation/native";
import { ChevronRight, CreditCard } from "lucide-react-native";

export const AccountsScreen = () => {
    const navigation = useNavigation<any>();

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("AccountDetails", { account: item })}
            activeOpacity={0.7}
        >
            <BIATCard className="mb-4 mx-4 border-l-4 border-l-primary">
                <View className="flex-row justify-between items-center mb-2">
                    <View className="flex-row items-center">
                        <View className="bg-light p-2 rounded-full mr-3">
                            <CreditCard size={20} color="#003D8F" />
                        </View>
                        <View>
                            <Text className="font-bold text-dark text-base">{item.name}</Text>
                            <Text className="text-gray-500 text-sm">{item.number}</Text>
                        </View>
                    </View>
                    <ChevronRight size={20} color="#A0A0A0" />
                </View>
                <View className="h-[1px] bg-gray-100 w-full my-3" />
                <View className="flex-row justify-between items-end">
                    <Text className="text-gray-500 text-sm">Solde disponible</Text>
                    <Text className="text-primary font-bold text-xl">
                        {item.balance} <Text className="text-sm font-normal">TND</Text>
                    </Text>
                </View>
            </BIATCard>
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper>
            <Header title="Mes Comptes" />
            <FlatList
                data={ACCOUNTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingVertical: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
};
