import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options = {{title: 'DAG'}}/>
        <Stack.Screen name = "Ziņas"
          component = {laikaZinasScreen}/>
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

function laikaZinasScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=lv&apiKey=c5baacfcc6684a6aaeacd289d4bf00e3')
            .then((response) => response.json())
            .then((json) => setData(json.items))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
          <Text>Ziņas</Text>
          {isLoading ? <ActivityIndicator /> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <View>
                          <Text>{item.title}, {item.country}</Text>
                          <Text>{item.alt_title}</Text>
                          <Text>{item.note}</Text>
                      </View>
                  )}
              />
          )}
      
      <FlatListBasics></FlatListBasics>
      <Button
      title = "Atgriezties uz sākumu"
      onPress={() => navigation.navigate('Home')}
      />
      
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