import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';


function CategoriasAmigos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.textContainer}>

        </View>
        <View style={styles.iconContainer}>

        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>CATEGORIA: HISTORIA</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.topButtonContainer}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.text}>CAMBIAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topButtonContainer}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.text}>RESPUESTA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.questionContainer}></View>
      </View>
      <View style={styles.container5}>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={[styles.topButton, {backgroundColor: '#ff0000',}]}>
            <Text style={styles.text}>FALLO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={[styles.topButton, {backgroundColor: '#00ff36',}]}>
            <Text style={styles.text}>ACIERTO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CategoriasAmigos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0004ff',
  },
  container1: {
    width: 400,
    height: 150,
    backgroundColor: 'green',
    borderColor: '#ffffff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container2: {
    width: 400,
    height: 50,
    backgroundColor: 'purple',
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    width: 400,
    height: 75,
    backgroundColor: 'red',
    borderColor: '#ffffff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container4: {
    width: 400,
    height: 300,
    backgroundColor: 'pink',
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: 400,
    height: 100,
    backgroundColor: 'yellow',
    borderColor: '#ffffff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    width: 200,
    height: 100,
    backgroundColor: 'black',
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
  topButtonContainer: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  questionContainer: {
    width: 300,
    height: 200,
    backgroundColor: 'black',
  },
  bottomButtonContainer: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
  },
  topButton: {
    width: 150,
    height: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
