import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleSheet,
  Image
} from "react-native";

interface Style {
  content: ViewStyle;
  content__heading: ViewStyle;
  content__button: ViewStyle;
  content__buttonText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  content: {
    flex: 1
  },
  content__heading: {
    fontSize: 20,
    marginTop: 12,
    color: "#333",
    fontWeight: "500"
  },
  content__button: {
    paddingVertical: 15,
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 6
  },
  content__buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  }
});
