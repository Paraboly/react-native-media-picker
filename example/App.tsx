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
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            borderRadius: 16,
            marginTop: "30%",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center"
          }}
          onPress={() => this.mediaPicker.openModal()}
        >
          <Text>Open Media Picker</Text>
        </TouchableOpacity>
        <MediaPicker ref={ref => (this.mediaPicker = ref)} />
      </View>
    );
  }
}

export default App;
