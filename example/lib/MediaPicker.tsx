import React from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import {
  styles,
  _modalStyle,
  _buttonStyle,
  _buttonTextStyle
} from "./MediaPicker.style";
import { Modalize } from "react-native-modalize";
import Icon from "react-native-dynamic-vector-icons";
import ImagePicker, { Image } from "react-native-image-crop-picker";

export interface IProps {
  cameraOnPress?: () => void;
  galleryOnPress?: (images: Image | Image[]) => void;
  IconComponent: any;
  cameraText: string;
  multiple: boolean;
  galleryText: string;
  cameraIconName: string;
  cameraIconType: string;
  cameraIconSize: number;
  backgroundColor: string;
  cameraIconColor: string;
  galleryIconName: string;
  galleryIconType: string;
  galleryIconSize: number;
  cameraTextColor: string;
  galleryTextColor: string;
  cameraButtonSize: number;
  galleryIconColor: string;
  galleryButtonSize: number;
  cameraButtonBackgroundColor: string;
  galleryButtonBackgroundColor: string;
}

interface IState {
  //   enthusiasmLevel: number;
}

export class MediaPicker extends React.Component<IProps, IState> {
  modal = React.createRef<Modalize>();

  static defaultProps = {
    multiple: true,
    cameraIconSize: 20,
    IconComponent: Icon,
    galleryIconSize: 23,
    cameraText: "Camera",
    cameraButtonSize: 50,
    galleryButtonSize: 50,
    galleryText: "Gallery",
    cameraIconName: "camera",
    cameraIconColor: "#90a1fc",
    backgroundColor: "#90a1fc",
    cameraTextColor: "#fdfdfd",
    galleryIconType: "Ionicons",
    galleryIconColor: "#90a1fc",
    galleryTextColor: "#fdfdfd",
    galleryIconName: "md-photos",
    cameraIconType: "FontAwesome",
    cameraButtonBackgroundColor: "#fdfdfd",
    galleryButtonBackgroundColor: "#fdfdfd"
  };

  constructor(props: IProps) {
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

  openGallery = () => {
    return ImagePicker.openPicker({
      multiple: this.props.multiple,
      writeTempFile: true // iOS Only
    });
  };

  handleGalleryPressed = () => {
    this.openGallery()
      .then(images => {
        this.props.galleryOnPress && this.props.galleryOnPress(images);
      })
      .catch(err =>
        Alert.alert("Something went wrong while picking images: ", err)
      );
  };

  renderContent = () => {
    const {
      cameraText,
      galleryText,
      cameraOnPress,
      IconComponent,
      galleryOnPress,
      cameraIconName,
      cameraIconType,
      cameraIconSize,
      cameraIconColor,
      galleryIconName,
      galleryIconType,
      galleryIconSize,
      cameraTextColor,
      galleryIconColor,
      cameraButtonSize,
      galleryTextColor,
      galleryButtonSize,
      cameraButtonBackgroundColor,
      galleryButtonBackgroundColor
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerGlue}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={_buttonStyle(
                cameraButtonSize,
                cameraButtonBackgroundColor
              )}
              onPress={cameraOnPress}
            >
              <IconComponent
                name={cameraIconName}
                type={cameraIconType}
                size={cameraIconSize}
                color={cameraIconColor}
              />
            </TouchableOpacity>
            <Text style={_buttonTextStyle(cameraTextColor)}>{cameraText}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={_buttonStyle(
                galleryButtonSize,
                galleryButtonBackgroundColor
              )}
              onPress={this.handleGalleryPressed}
            >
              <IconComponent
                name={galleryIconName}
                type={galleryIconType}
                size={galleryIconSize}
                color={galleryIconColor}
              />
            </TouchableOpacity>
            <Text style={_buttonTextStyle(galleryTextColor)}>
              {galleryText}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { backgroundColor, ...rest } = this.props;
    return (
      <Modalize
        ref={this.modal}
        snapPoint={115}
        modalStyle={_modalStyle(backgroundColor)}
        {...rest}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}
