import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AppLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      safeAreaInsets={{ bottom: insets.bottom + 16 }}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Decibel Meter",
          tabBarLabel: "Decibel Meter",
        }}
      />
      <Tabs.Screen
        name="net-speed"
        options={{
          title: "Net Speed",
          tabBarLabel: "Net Speed",
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
