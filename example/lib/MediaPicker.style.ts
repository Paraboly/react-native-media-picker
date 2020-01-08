import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleSheet,
  Image
} from "react-native";

interface Style {
  content: ViewStyle;
  content__icon: ImageStyle;
  content__subheading: ViewStyle;
  content__heading: ViewStyle;
  content__description: ViewStyle;
  content__input: ViewStyle;
  content__button: ViewStyle;
  content__buttonText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  content: {
    padding: 20
  },

  content__icon: {
    width: 32,
    height: 32,

    marginBottom: 20
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#ccc"
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333"
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666"
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 20,

    width: "100%",

    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#cdcdcd",
    borderRadius: 6
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
