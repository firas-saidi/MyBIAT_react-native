import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { BIATCard } from "../components/BIATCard";
import { Header } from "../components/Header";
import { ACCOUNTS } from "../constants/mockData";
import { ArrowRight, Send, CreditCard, RefreshCw, History, Bell } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "../components/Skeleton";

export const HomeScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const totalBalance = ACCOUNTS.reduce(
        (sum, acc) => sum + parseFloat(acc.balance.replace(/,/g, "").replace(" ", "")),
        0
    ).toLocaleString("fr-FR", { minimumFractionDigits: 3 });

    const QuickAction = ({ icon: Icon, label, onPress }: { icon: any; label: string; onPress?: () => void }) => (
        <TouchableOpacity
            className="items-center justify-center w-[22%]"
            onPress={onPress}
        >
            <View className="w-14 h-14 bg-white rounded-2xl justify-center items-center shadow-sm mb-2">
                <Icon size={24} color="#003D8F" />
            </View>
            <Text className="text-xs text-center text-dark font-medium" numberOfLines={1}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper scrollable>
            <Header
                title="Bonjour, Foulen"
                rightElement={
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            className="mr-3 p-1"
                            onPress={() => navigation.navigate("Notifications" as never)}
                        >
                            <Bell size={24} color="#003D8F" />
                            <View className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
                        </TouchableOpacity>
                        <View className="w-10 h-10 bg-primary rounded-full justify-center items-center">
                            <Text className="text-white font-bold">FB</Text>
                        </View>
                    </View>
                }
            />

            <View className="px-4 mt-4">
                {/* Balance Card */}
                <BIATCard className="bg-primary mb-6">
                    {isLoading ? (
                        <View>
                            <Skeleton width={120} height={20} className="mb-2 bg-white/20" />
                            <Skeleton width={200} height={40} className="bg-white/20" />
                        </View>
                    ) : (
                        <>
                            <Text className="text-white/80 text-sm mb-1">Solde total estimé</Text>
                            <Text className="text-white text-3xl font-bold mb-4">
                                {totalBalance} <Text className="text-lg">TND</Text>
                            </Text>
                            <View className="h-[1px] bg-white/20 w-full mb-4" />
                            <TouchableOpacity className="flex-row items-center justify-between">
                                <Text className="text-white font-medium">Voir le détail</Text>
                                <ArrowRight size={20} color="#FFF" />
                            </TouchableOpacity>
                        </>
                    )}
                </BIATCard>

                {/* Quick Actions */}
                <Text className="text-lg font-bold text-dark mb-4">Accès rapide</Text>
                <View className="flex-row justify-between mb-8">
                    <QuickAction
                        icon={Send}
                        label="Virements"
                        onPress={() => navigation.navigate("Transfers" as never)}
                    />
                    <QuickAction
                        icon={CreditCard}
                        label="Cartes"
                        onPress={() => navigation.navigate("Cards" as never)}
                    />
                    <QuickAction icon={RefreshCw} label="Recharge" />
                    <QuickAction icon={History} label="Historique" />
                </View>

                {/* Accounts Summary */}
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-lg font-bold text-dark">Mes Comptes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Accounts" as never)}>
                        <Text className="text-primary font-medium">Voir tout</Text>
                    </TouchableOpacity>
                </View>

                {isLoading ? (
                    <View>
                        <Skeleton height={80} className="mb-4 rounded-xl" />
                        <Skeleton height={80} className="mb-4 rounded-xl" />
                        <Skeleton height={80} className="mb-4 rounded-xl" />
                    </View>
                ) : (
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mb-8 -mx-4 px-4"
                    >
                        {ACCOUNTS.map((account, index) => (
                            <BIATCard
                                key={account.id}
                                className="w-72 mr-4 p-5 border-l-4 border-l-secondary"
                            >
                                <View className="flex-row justify-between items-start mb-4">
                                    <View>
                                        <Text className="text-gray-500 text-sm mb-1">{account.name}</Text>
                                        <Text className="text-dark font-medium">{account.number}</Text>
                                    </View>
                                    <View className="bg-light p-2 rounded-lg">
                                        <CreditCard size={20} color="#003D8F" />
                                    </View>
                                </View>
                                <Text className="text-2xl font-bold text-primary text-right">
                                    {account.balance} <Text className="text-sm text-dark">TND</Text>
                                </Text>
                            </BIATCard>
                        ))}
                    </ScrollView>
                )}

                {/* Cards Summary */}
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-lg font-bold text-dark">Mes Cartes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Cards" as never)}>
                        <Text className="text-primary font-medium">Voir tout</Text>
                    </TouchableOpacity>
                </View>

                <BIATCard className="flex-row items-center justify-between p-4 mb-4">
                    <View className="flex-row items-center">
                        <View className="w-12 h-8 bg-primary rounded mr-4" />
                        <View>
                            <Text className="font-bold text-dark">Visa Gold</Text>
                            <Text className="text-gray-500 text-xs">**** 1234</Text>
                        </View>
                    </View>
                    <View className="bg-green-100 px-3 py-1 rounded-full">
                        <Text className="text-green-700 text-xs font-bold">Active</Text>
                    </View>
                </BIATCard>
            </View>
        </ScreenWrapper>
    );
};
