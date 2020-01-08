import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";

import { MediaPicker } from "./lib/MediaPicker";

class App extends React.Component {
  private mediaPicker: any;
  constructor(props: any) {
    super(props);
    this.mediaPicker = React.createRef<MediaPicker>();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "red",
            borderRadius: 16,
            marginTop: "30%"
          }}
          onPress={() => this.mediaPicker.openModal()}
        >
          <Text style={{ alignItems: "center", justifyContent: "center" }}>
            Open Media Picker
          </Text>
        </TouchableOpacity>
        <MediaPicker ref={ref => (this.mediaPicker = ref)} />
      </View>
    );
  }
}

export default App;
