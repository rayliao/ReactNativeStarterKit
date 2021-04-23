import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {mainRoot} from '.';

const Login = () => {
  return (
    <View style={styles.root}>
      <Button
        title="login"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default Login;
