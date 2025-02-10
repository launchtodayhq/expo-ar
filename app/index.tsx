import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, Pressable, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

interface Product {
  id: string;
  name: string;
  image: string;
  dimensions: string;
  modelUrl: string;
}

// Sample product data (we'll expand this later)
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "bike1",
    name: "Mountain Bike",
    image: "https://example.com/bike.jpg", // We'll add real images later
    dimensions: "180cm x 60cm x 110cm",
    modelUrl: "https://example.com/bike.glb", // We'll add real 3D models later
  },
  {
    id: "bag1",
    name: "Travel Backpack",
    image: "https://example.com/bag.jpg",
    dimensions: "45cm x 30cm x 20cm",
    modelUrl: "https://example.com/bag.glb",
  },
  {
    id: "chair1",
    name: "Office Chair",
    image: "https://example.com/chair.jpg",
    dimensions: "45cm x 30cm x 20cm",
    modelUrl: "https://example.com/chair.glb",
  },
];

export default function Index() {
  const isDark = useColorScheme() === "dark";

  return (
    <SafeAreaView
      style={{
        ...styles.safeArea,
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>AR Product Viewer</ThemedText>
        <ThemedText style={styles.subtitle}>
          Select a product to view in AR
        </ThemedText>

        {SAMPLE_PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: "/ar",
              params: {
                productId: product.id,
                name: product.name,
                dimensions: product.dimensions,
                modelUrl: product.modelUrl,
              },
            }}
            asChild
          >
            <Pressable
              style={{
                ...styles.productCard,
                backgroundColor: isDark ? "#2C2C2E" : "#f0f0f0",
              }}
            >
              <ThemedText style={styles.productName}>{product.name}</ThemedText>
              <ThemedText style={styles.productDimensions}>
                {product.dimensions}
              </ThemedText>
              <ThemedText
                style={[styles.viewInAR, { color: isDark ? "white" : "black" }]}
              >
                View in AR →
              </ThemedText>
            </Pressable>
          </Link>
        ))}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    opacity: 0.7,
  },
  productCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  productDimensions: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 10,
  },
  viewInAR: {
    fontSize: 16,
    color: "#007AFF",
  },
});
