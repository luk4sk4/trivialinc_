import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../modules/styles';
import know_your_friends from '../cards/friends.json'


function CategoriasAmigos({ navigation }) {
  const category_selection = () => {
    for (let i = 0; i<know_your_friends.length; i++){
      category_array.push(know_your_friends[i].category)
    }
  }
  const category_array = [];
  category_selection();


  type CategorySelectedProps = {
    name: string;
  };


  //OKEY WE HAVE TO HANDLE THIS
  const handleCat = (catName) => {
    if (cateName == "Add new"){}
    else {}
  }

  

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.buttonText}>TEST YOUR FRIENDS</Text>
        </View>
        <View style={styles.midContainer}>
          <ScrollView>
          {Array.from({ length: Math.ceil(category_array.length / 2 + 1) }).map((_, index) => (
      <View style={styles.rowBox} key={index}>
        {Array.from({ length: 2 }).map((_, subIndex) => {
          const elementIndex = index * 2 + subIndex;
          if (elementIndex <= category_array.length) {
            return (
              <TouchableOpacity
                key={`${index}-${subIndex}`}
                style={styles.category}
                //onPress={}
              > 
                <Text style={styles.buttonText}>{(elementIndex < category_array.length) ? category_array[elementIndex] : "Add new"}</Text>
              </TouchableOpacity>
            );
          }
          return null; // Return null to avoid rendering an empty space
        })}
        
      </View>
    ))}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
            </View>
            <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Preguntas')}>
                    <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>
        </View>
  );
}

export default CategoriasAmigos;