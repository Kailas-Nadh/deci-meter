import { useTheme } from "@/shared/hooks/useTheme";
import { Text, View, StyleSheet } from "react-native";

export const Explore=()=> {
  const theme=useTheme();
    return (
      <View style={[styles.container, { backgroundColor: theme['background'] }]}>
        <Text style={{ color: theme['text'] }}>Edit src/app/explore.tsx to edit this screen.</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explore;