import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //general containers
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0004ff',
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
      
      
      
});
export default styles;