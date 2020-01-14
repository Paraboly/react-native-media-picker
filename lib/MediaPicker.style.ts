import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  buttonContainer: ViewStyle;
  content__heading: ViewStyle;
  content__button: ViewStyle;
  content__buttonText: TextStyle;
}

export const _modalStyle = (backgroundColor: string) => ({
  backgroundColor,
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32
});

export const _buttonStyle = (size: number, backgroundColor: string) => ({
  width: size,
  height: size,
  backgroundColor,
  alignItems: "center",
  borderRadius: size / 2,
  justifyContent: "center"
});

export const _buttonTextStyle = (color: string) => ({
  top: 3,
  color
});

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  containerGlue: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center"
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
