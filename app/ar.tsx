import { useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

export default function ARViewer() {
  const isDark = useColorScheme() === "dark";

  const params = useLocalSearchParams<{
    productId: string;
    name: string;
    dimensions: string;
    modelUrl: string;
  }>();

  useEffect(() => {
    // This is where we'll initialize ARKit later
    console.log("Product to show:", params);
  }, [params]);

  return (
    <SafeAreaView
      style={{
        ...styles.safeArea,
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <View style={styles.container}>
        {/* This will be replaced with AR view */}
        <View
          style={{
            ...styles.arPlaceholder,
            backgroundColor: isDark ? "black" : "white",
          }}
        >
          <ThemedText style={styles.placeholderText}>
            AR View Coming Soon
          </ThemedText>
          <ThemedText>Product: {params.name}</ThemedText>
          <ThemedText>Size: {params.dimensions}</ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  arPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
