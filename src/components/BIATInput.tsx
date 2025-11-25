import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { cn } from "../utils/cn";

interface BIATInputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerClassName?: string;
}

export const BIATInput: React.FC<BIATInputProps> = ({
    label,
    error,
    containerClassName,
    className,
    ...props
}) => {
    return (
        <View className={cn("w-full mb-4", containerClassName)}>
            {label && (
                <Text className="text-dark font-medium mb-2 text-base">{label}</Text>
            )}
            <TextInput
                className={cn(
                    "w-full h-12 bg-white border border-gray-300 rounded-xl px-4 text-dark text-base",
                    "focus:border-primary focus:border-2",
                    error && "border-danger",
                    className
                )}
                placeholderTextColor="#A0A0A0"
                {...props}
            />
            {error && <Text className="text-danger text-sm mt-1">{error}</Text>}
        </View>
    );
};
