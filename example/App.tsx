import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import { MediaPicker } from "./lib/MediaPicker";

interface IProps {}

interface IState {
  image: any;
  images: any;
}

class App extends React.Component<IProps, IState> {
  private mediaPicker: any;
  constructor(props: any) {
    super(props);
    this.mediaPicker = React.createRef<MediaPicker>();
    this.state = {
      image: null,
      images: null
    };
  }

  render() {
    const { images } = this.state;
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ScrollView style={{ height: 250 }}>
          {images &&
            images.map((image: any) => (
              <Image
                source={image}
                key={image.path}
                borderRadius={16}
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 16,
                  resizeMode: "contain"
                }}
              />
            ))}
        </ScrollView>
        <View style={{ flex: 1 }}>
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
        </View>
        <MediaPicker
          multiple
          ref={ref => (this.mediaPicker = ref)}
          galleryOnPress={(image: any) => {
            console.log("Image: ", image);
            this.setState({
              image: null,
              images: images.map((i: any) => {
                console.log("received image", i);
                return {
                  uri: i.path,
                  width: i.width,
                  height: i.height,
                  mime: i.mime
                };
              })
            });
            // ? Single Image (Multiple = false)
            // this.setState({
            //   image: {
            //     uri: image.path,
            //     width: image.width,
            //     height: image.height,
            //     mime: image.mime
            //   }
            // });
          }}
        />
      </SafeAreaView>
    );
  }
}

export default App;
