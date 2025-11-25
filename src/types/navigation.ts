import { NavigatorScreenParams } from "@react-navigation/native";

// Tab Navigator params
export type TabParamList = {
    Home: undefined;
    Accounts: undefined;
    Transfers: undefined;
    Cards: undefined;
    Settings: undefined;
};

// Root Stack Navigator params
export type RootStackParamList = {
    Login: undefined;
    Main: NavigatorScreenParams<TabParamList>;
    AccountDetails: { accountId: string };
    TransferSuccess: undefined;
    CardLimits: { cardId: string };
    Notifications: undefined;
    ProfileEdit: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
