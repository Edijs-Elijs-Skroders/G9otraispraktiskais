import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Home Screen</Text>  
      <Button 
      title= "Apskatīt laika ziņas"
      onPress={() => navigation.navigate('Laika ziņas')} 
      />
    </View>
  );
}

function laikaZinasScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Laika ziņas</Text>
      <Button
      title = "Atgriezties uz sākumu"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options = {{title: 'Sveicināti'}}/>
        <Stack.Screen name = "Laika ziņas"
        component = {laikaZinasScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
