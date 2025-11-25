import React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "../utils/cn";

interface BIATCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    onPress?: () => void;
}

export const BIATCard = ({
    children,
    className,
    title,
    subtitle,
    onPress,
}: BIATCardProps) => {
    const Container = onPress ? Pressable : View;

    return (
        <Container
            onPress={onPress}
            className={cn(
                "bg-white rounded-2xl p-4 shadow-sm border border-gray-100",
                className
            )}
        >
            {(title || subtitle) && (
                <View className="mb-3">
                    {title && <Text className="text-lg font-bold text-primary mb-1">{title}</Text>}
                    {subtitle && <Text className="text-sm text-gray-500">{subtitle}</Text>}
                </View>
            )}
            {children}
        </Container>
    );
};
