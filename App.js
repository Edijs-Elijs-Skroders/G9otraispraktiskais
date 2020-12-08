import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options = {{title: 'DAG'}}/>
        <Stack.Screen name = "Laika ziņas"
          component = {laikaZinasScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//test


function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Home Screen</Text>  
      <Button 
        title = "Apskatīt laika ziņas"
        onPress={() => navigation.navigate('Laika ziņas')} 
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

function laikaZinasScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Laika ziņas</Text>
      <Button
      title = "Atgriezties uz sākumu"
      onPress={() => navigation.navigate('Home')}
      />
      <FlatListBasics></FlatListBasics>
    </View>
  );
}

const Stack = createStackNavigator();

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'John Doe 1' },
          { key: 'John Doe 2' },
          { key: 'John Doe 3' },
          { key: 'John Doe 4' },
          { key: 'John Doe 5' },
          ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
  );
}

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