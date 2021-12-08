import * as React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import MediaPicker from "./lib/MediaPicker";

console.disableYellowBox = true;

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
      images: [],
    };
  }

  renderItem = (data) => {
    const { item, index } = data;

    return (
      <TouchableOpacity onPress={() => {}}>
        <Image
          key={item.path}
          source={item}
          style={{
            margin: 16,
            width: 200,
            height: 200,
            borderRadius: 16,
            overflow: "hidden",
          }}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { images } = this.state;
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            height: 250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatList
            horizontal
            data={images}
            renderItem={this.renderItem.bind(this)}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 200,
            top: "10%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f03941",
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
          onPress={() => this.mediaPicker.openModal()}
        >
          <Text
            style={{
              color: "#fdfdfd",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Open Media Picker
          </Text>
        </TouchableOpacity>
        <MediaPicker
          multiple
          compressImageQuality={0.5}
          ref={(ref) => (this.mediaPicker = ref)}
          onGalleryPress={(images: any) => {
            this.setState({
              image: null,
              images: images.map((image: any) => {
                console.log("received image", image);
                return {
                  uri: image.path,
                  width: image.width,
                  height: image.height,
                  mime: image.mime,
                };
              }),
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
          onCameraPress={(image: any) => {
            Alert.alert(JSON.stringify(image));
            this.setState({ image });
          }}
        />
      </SafeAreaView>
    );
  }
}

export default App;
