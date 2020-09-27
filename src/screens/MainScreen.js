import React, { useState, useRef } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Input, Text, Button } from "react-native-elements";
//import { captureRef } from "react-native-view-shot";
//import Share from "react-native-share";

const MainScreen = () => {
  const [inp, setInp] = useState("");
  //const viewRef = useRef(); //get ref
  // const shareImage = async () => {
  //   try {
  //     // capture component
  //     const uri = await captureRef(imageRef, {
  //       format: "png",
  //       quality: 0.8,
  //     }); // capturing our ref

  //     // share
  //     const shareResponse = await Share.open({ url: uri });
  // opening share menu
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/4.jpg")}
        style={styles.img}
        //ref={viewRef} //targeted ref
      >
        <Text style={styles.text}>{inp}</Text>
      </ImageBackground>
      <Input
        placeholder="Enter anything"
        value={inp}
        onChangeText={setInp}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 5,
  },
  img: {
    height: 300,
    width: 300,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    margin: 70,
  },
  input: {
    marginTop: 40,
  },
});

export default MainScreen;
