import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { Header } from "../components/Header";
import { Bell, CreditCard, ArrowRightLeft } from "lucide-react-native";

const NOTIFICATIONS = [
    {
        id: "1",
        title: "Virement reçu",
        message: "Vous avez reçu un virement de 150.000 TND de la part de Ahmed Ben Ali.",
        date: "Aujourd'hui, 10:30",
        type: "transfer",
        read: false,
    },
    {
        id: "2",
        title: "Paiement carte",
        message: "Paiement de 45.500 TND chez Carrefour Market.",
        date: "Hier, 18:45",
        type: "card",
        read: true,
    },
    {
        id: "3",
        title: "Nouveau relevé",
        message: "Votre relevé de compte du mois d'Octobre est disponible.",
        date: "20 Nov, 09:00",
        type: "info",
        read: true,
    },
];

export const NotificationsScreen = () => {
    const renderItem = ({ item }: { item: any }) => {
        let Icon = Bell;
        let color = "#003D8F";
        let bgColor = "bg-blue-100";

        if (item.type === "transfer") {
            Icon = ArrowRightLeft;
            color = "#28a745";
            bgColor = "bg-green-100";
        } else if (item.type === "card") {
            Icon = CreditCard;
            color = "#FBB600";
            bgColor = "bg-yellow-100";
        }

        return (
            <View className={`bg-white p-4 mb-3 rounded-xl border ${item.read ? "border-gray-100" : "border-primary/30"}`}>
                <View className="flex-row">
                    <View className={`${bgColor} p-2 rounded-full h-10 w-10 justify-center items-center mr-3`}>
                        <Icon size={20} color={color} />
                    </View>
                    <View className="flex-1">
                        <View className="flex-row justify-between items-start mb-1">
                            <Text className={`text-base ${item.read ? "font-medium text-dark" : "font-bold text-primary"}`}>
                                {item.title}
                            </Text>
                            <Text className="text-xs text-gray-400">{item.date}</Text>
                        </View>
                        <Text className="text-gray-600 text-sm leading-5">{item.message}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ScreenWrapper>
            <Header title="Notifications" showBack />
            <FlatList
                data={NOTIFICATIONS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
};
