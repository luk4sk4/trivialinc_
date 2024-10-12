import React from 'react';
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity } from 'react-native';

const ErrorPopup = ({ message }) => {
  console.log(3)
  return (
    <View style={styles.errorContainer}>
    <TouchableOpacity style={styles.errorBackground}>
      
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    errorContainer: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    errorBackground: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 400,
        height: 800,
        justifyContent: 'center',
        alignItems: 'center',
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

export default ErrorPopup;