import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreens} from './src/screens/Auth';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <AuthScreens />
    </NavigationContainer>
  );
};

export default App;
