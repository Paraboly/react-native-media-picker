import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Alert } from "react-native";

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
        <MediaPicker
          ref={ref => (this.mediaPicker = ref)}
          galleryOnPress={images => Alert.alert(JSON.stringify(images))}
        />
      </View>
    );
  }
}

export default App;
