import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //general containers
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0004ff',
      },
    topContainer: {
        width: 400,
        height: 50,
        borderBottomWidth: 3,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    midContainer: {
        width: 400,
        height: 500,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        width: 400,
        borderTopWidth: 3,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
      //general stuff
      buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'TTLAKES',
      },
      image: {
        flex: 1,
        resizeMode: 'contain',
      },
      

      //HOME SCREEN
      homescreenButton: {
        borderWidth: 2,
        borderColor: '#ffffff',
        width: 200,
        height: 50,
        marginVertical: 10,
        borderRadius: 25,
        shadowColor: '#fff',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoBox: {
        position: 'absolute',
        top: 100,
        height: 100,
        width: 300,
      },
      logo: {
        resizeMode: 'contain',
        height: 100,
        width: 300,
      },

      //PLAY SCREEN   => I THINK IT IS BETTER TO ADD TO EVEN THIS ONE THE CONTAINER TOP, MID, LOW AND EERN THOUGH ONLY ONE WOULD BE USED MAY IMPROVE STYLE
      playerNumberBox: {
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      sliderbox: {
        width: 200,
        height: 50,
        justifyContent: 'center',
      },
      sliderboxbox: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 200,
      },

      //CATEGORY CLASS SCREEN
      categoryClassButtonBox: {
        width: 250,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      categoryClassButton: {
        borderWidth: 3,
        borderColor: '#ffffff',
        width: 250,
        height: 75,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      playButton: {
          borderWidth: 2,
          borderColor: '#ffffff',
          width: 250,
          height: 50,
          marginVertical: 10,
          borderRadius: 25,
          justifyContent: 'center', 
          alignItems: 'center',
      },

      //CATEGORIES SCREENS SELECTION

      categoryButtonBox: {
          width: 250,
          height: 100,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
      },
      rowBox: {
        width: 400,
        height: 190,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
      category: {
        height: 150,
        width: 150,
        marginVertical: 10,
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
      },
      red: {
        borderColor: '#f90a0a',
      },
      green: {
        borderColor: '#37ee2e',
      },
      pink: {
        borderColor: '#ff00c6',
      },
      blue: {
        borderColor: '#00eaff',
      },
      purple: {
        borderColor: '#ba00ff',
      },
      yellow: {
        borderColor: '#fff600',
      },
      white: {
        borderColor: '#ffffff',
      },

      //CATEGORIES STARS CIRCLES

      circlesContainer: {
          width: 350,
          height: 50,
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      },
      circle: {
          borderWidth: 2,
          borderColor: '#ffffff',
          width: 50,
          height: 50,
          margin: 5,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
      },
      imagenBrillo: {
          width: 50,
          height: 50,
          margin: 5,
          resizeMode: "contain",
      },
      
      //ERROR
      errorPopUp: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 800,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      errorBox: {
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 20,
        },
        errorText: {
        textAlign: 'center',
        color: '#141823',
        },
      
      
      
});
export default styles;