import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {!image 
      ?
        <Pressable
          style={styles.button}
          onPress={pickImage} 
        >
          <Text style={styles.buttonText}>Pick Image</Text>
        </Pressable>
      :
        <View>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{ uri: image }}/>
          </View>
          <View>
            <Pressable
              style={styles.button}
              onPress={pickImage} 
              title="Pick Another Image" 
            >
              <Text style={styles.buttonText}>Pick Another Image</Text>
            </Pressable>
            <Pressable 
              style={styles.button}
              title="Confirm Image" 
            >
              <Text style={styles.buttonText}>Confirm Image</Text>
            </Pressable>
          </View>
        </View>
      }
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imageView:{
    margin: 25,
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 20
  },
  image:{
    width: 360,
    height: 270,
    borderRadius: 20
  }
});
