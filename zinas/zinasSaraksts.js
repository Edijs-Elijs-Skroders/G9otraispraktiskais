import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, Button, FlatList } from 'react-native';

export default function zinasSaraksts({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
'https://api.currentsapi.services/v1/search?keywords=health&apiKey=sflsHMybzA7p_iJSJg9fg0lflPwG7Yj8XMNtXIsluji8UR0p'
    )
      .then((response) => response.json())
      .then((json) => setData(json.news))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <Button
                title={item.title}
                onPress={() =>
                  navigation.navigate('Ziņu apraksts', {
                    title: item.title,
                    description: item.description,
                    image: item.image,
                    published: item.published,
                    url: item.url,
                  })
                }
              />
            </View>
          )}
        />
      )}
    </View>
  );
}