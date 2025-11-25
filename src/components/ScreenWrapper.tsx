import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "../utils/cn";

interface ScreenWrapperProps {
    children: React.ReactNode;
    className?: string;
    scrollable?: boolean;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
    children,
    className,
    scrollable = false,
}) => {
    const Content = scrollable ? ScrollView : View;

    return (
        <SafeAreaView className="flex-1 bg-light">
            <Content
                className={cn("flex-1", className)}
                contentContainerStyle={scrollable ? { paddingBottom: 20 } : undefined}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </Content>
        </SafeAreaView>
    );
};
