import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { cn } from "../utils/cn";

interface HeaderProps {
    title: string;
    showBack?: boolean;
    rightElement?: React.ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    showBack = false,
    rightElement,
    className,
}) => {
    const navigation = useNavigation();

    return (
        <View
            className={cn(
                "flex-row items-center justify-between px-4 py-4 bg-light",
                className
            )}
        >
            <View className="flex-row items-center">
                {showBack && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="mr-3 p-1 rounded-full active:bg-gray-200"
                    >
                        <ArrowLeft size={24} color="#003D8F" />
                    </TouchableOpacity>
                )}
                <Text className="text-2xl font-bold text-primary">{title}</Text>
            </View>
            {rightElement}
        </View>
    );
};
