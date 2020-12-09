import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import zinasSaraksts from './zinas/zinasSaraksts';
import zinasApraksts from './zinas/zinasApraksts';

  

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options = {{title: 'DAG'}}/>
        <Stack.Screen name = "Ziņas"
          component = {zinasSaraksts}
          options ={{title: 'Ziņas'}}/>
        <Stack.Screen name = "Ziņu apraksts"
          component = {zinasApraksts}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Home Screen</Text>  
      <Button 
        title = "Apskatīt ziņas"
        onPress={() => navigation.navigate('Ziņas')} 
      />
      <Text>Summa ir {count}</Text>
      <Button
        title = "+1"
        onPress = {() => setCount(count + 1)}
      />
      <Button
        title = "-1"
        onPress = {() => setCount(count - 1)}
      />
    </View>
  );
}


const Stack = createStackNavigator();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    skClick: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default App;