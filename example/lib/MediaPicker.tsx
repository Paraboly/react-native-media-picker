import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./MediaPicker.style";
import { Modalize } from "react-native-modalize";

export interface Props {
  //   name: string;
  //   enthusiasmLevel?: number;
}

interface State {
  //   enthusiasmLevel: number;
}

export class MediaPicker extends React.Component<Props, State> {
  modal = React.createRef<Modalize>();

  constructor(props: Props) {
    super(props);

    // if ((props.enthusiasmLevel || 0) <= 0) {
    //   throw new Error("You could be a little more enthusiastic. :D");
    // }

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
    return (
      <View style={styles.content}>
        <Text style={styles.content__subheading}>
          {"Last step".toUpperCase()}
        </Text>
        <Text style={styles.content__heading}>Send the message?</Text>
        <Text style={styles.content__description}>
          Proin bibendum purus sit amet nibh pulvinar lobortis. Cras posuere
          metus sit amet nulla ornare iaculis. Etiam nec leo tortor. Aliquam
          dictum mi vitae suscipit placerat.
        </Text>
        <TextInput
          style={styles.content__input}
          placeholder="Type your username"
        />

        <TouchableOpacity
          style={styles.content__button}
          activeOpacity={0.9}
          onPress={this.closeModal}
        >
          <Text style={styles.content__buttonText}>{"Send".toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <Modalize ref={this.modal} adjustToContentHeight>
        {this.renderContent()}
      </Modalize>
    );
  }
}
