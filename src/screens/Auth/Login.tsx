import React from 'react';
import {Text, TextInput} from 'react-native';
import {Page} from '../../components';

export const LoginScreen = () => {
  return (
    <Page>
      <Text>Login</Text>
      <TextInput placeholder="hello" />
    </Page>
  );
};
