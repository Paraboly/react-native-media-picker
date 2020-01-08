import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { styles } from "./MediaPicker.style";
import { Modalize } from "react-native-modalize";
import Icon from "react-native-dynamic-vector-icons";

export interface Props {
  cameraOnPress?: () => void;
  galleryOnPress?: () => void;
}

interface State {
  //   enthusiasmLevel: number;
}

export class MediaPicker extends React.Component<Props, State> {
  modal = React.createRef<Modalize>();

  constructor(props: Props) {
    super(props);
    // this.state = {
    //   enthusiasmLevel: props.enthusiasmLevel || 1
    // };
  }

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  renderContent = () => {
    const { cameraOnPress, galleryOnPress } = this.props;
    return (
      <View style={styles.content}>
        <View
          style={{
            marginTop: 16,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fdfdfd"
                }}
                onPress={cameraOnPress}
              >
                <Icon name="camera" type="FontAwesome" color="#90a1fc" />
              </TouchableOpacity>
              <Text style={{ top: 3, color: "#fdfdfd" }}>Camera</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fdfdfd"
                }}
                onPress={galleryOnPress}
              >
                <Icon
                  name="md-photos"
                  type="Ionicons"
                  color="#90a1fc"
                  size={23}
                />
              </TouchableOpacity>
              <Text style={{ top: 3, color: "#fdfdfd" }}>Gallery</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Modalize
        ref={this.modal}
        modalStyle={{
          backgroundColor: "#90a1fc",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32
        }}
        snapPoint={115}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}
