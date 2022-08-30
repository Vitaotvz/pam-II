import react from "react";
import { View, Text, Image, Scrollview, TextInput, ScrollView } from "react-native-web";
import messiImg from './assets/img/messi.jpg';
const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color:"black",
          }}
        >
          Messi Careca
        </Text>
        <Image
          source={{
            uri: messiImg,
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray' ,
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Dê 'Oi' para o messi Careca!"
      />
    </ScrollView>
  );  
}

  export default Pokemon;
