import React from "react";
import { View, Text, SectionList } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { TRANSACTIONS } from "../constants/mockData";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { useRoute } from "@react-navigation/native";

export const AccountDetailsScreen = () => {
    const route = useRoute<any>();
    const { account } = route.params || {
        account: {
            name: "Compte Chèque",
            number: "12 345 678 901 23",
            balance: "1 250,500",
        },
    };

    const renderTransaction = ({ item }: { item: any }) => (
        <View className="bg-white p-4 flex-row justify-between items-center border-b border-gray-100">
            <View className="flex-row items-center">
                <View
                    className={`w-10 h-10 rounded-full justify-center items-center mr-3 ${item.type === "credit" ? "bg-green-100" : "bg-red-100"
                        }`}
                >
                    {item.type === "credit" ? (
                        <ArrowDownLeft size={20} color="#28a745" />
                    ) : (
                        <ArrowUpRight size={20} color="#dc3545" />
                    )}
                </View>
                <View>
                    <Text className="font-bold text-dark text-base">{item.title}</Text>
                    <Text className="text-gray-400 text-xs">{item.date}</Text>
                </View>
            </View>
            <Text
                className={`font-bold ${item.type === "credit" ? "text-success" : "text-dark"
                    }`}
            >
                {item.amount}
            </Text>
        </View>
    );

    return (
        <ScreenWrapper>
            <Header title="Détails Compte" showBack />

            {/* Account Header Summary */}
            <View className="bg-primary px-6 py-8 rounded-b-3xl shadow-lg mb-6">
                <Text className="text-white/80 text-center mb-1">{account.name}</Text>
                <Text className="text-white text-3xl font-bold text-center mb-2">
                    {account.balance} <Text className="text-lg">TND</Text>
                </Text>
                <Text className="text-white/60 text-center text-sm">{account.number}</Text>
            </View>

            <View className="flex-1 bg-white rounded-t-3xl shadow-sm overflow-hidden">
                <View className="p-4 border-b border-gray-100">
                    <Text className="text-lg font-bold text-dark">Historique</Text>
                </View>
                <SectionList
                    sections={[{ title: "Novembre 2023", data: TRANSACTIONS }]}
                    keyExtractor={(item) => item.id}
                    renderItem={renderTransaction}
                    renderSectionHeader={({ section: { title } }) => (
                        <View className="bg-light px-4 py-2">
                            <Text className="text-gray-500 font-medium text-sm">{title}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </ScreenWrapper>
    );
};
