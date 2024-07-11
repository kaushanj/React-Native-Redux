import Constants from "expo-constants";

export const ExpoConfig = typeof Constants.expoConfig & {
    releaseChannel?: String
}