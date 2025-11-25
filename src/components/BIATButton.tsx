import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { cn } from "../utils/cn";

interface BIATButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "outline";
    isLoading?: boolean;
    className?: string;
}

export const BIATButton: React.FC<BIATButtonProps> = ({
    title,
    onPress,
    variant = "primary",
    isLoading = false,
    className,
}) => {
    const baseStyles = "h-12 rounded-xl justify-center items-center px-4";
    const variants = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        outline: "border-2 border-primary bg-transparent",
    };
    const textVariants = {
        primary: "text-white font-bold text-lg",
        secondary: "text-dark font-bold text-lg",
        outline: "text-primary font-bold text-lg",
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isLoading}
            className={cn(baseStyles, variants[variant], className)}
            activeOpacity={0.8}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === "secondary" ? "#1C1C1C" : "#FFF"} />
            ) : (
                <Text className={textVariants[variant]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};
