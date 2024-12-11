import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import MainNavigator from './src/navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';  // Using SafeAreaProvider for better support

const App = () => {

  return (
    <SafeAreaProvider style={{ flex: 1 }}>      
      <NavigationContainer>
        <MainNavigator/>        
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
