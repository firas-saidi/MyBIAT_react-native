import React from "react";
import { View, ViewStyle } from "react-native";
import { cn } from "../utils/cn";

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    className?: string;
    style?: ViewStyle;
}

export const Skeleton = ({
    width,
    height,
    borderRadius = 8,
    className,
    style
}: SkeletonProps) => {
    return (
        <View
            className={cn("bg-gray-300", className)}
            style={[
                {
                    width: width as any,
                    height: height as any,
                    borderRadius: borderRadius,
                },
                style
            ]}
        />
    );
};
