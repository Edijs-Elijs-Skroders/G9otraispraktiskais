import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function zinasApraksts({route}) {
   const { title, description, image, published, url} = route.params;
   const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    image: {
      width: 66,
      height: 58,
    },
  });
  
  return (
    <View>  
      <Text style={{fontSize: 24}}>{JSON.stringify(title)}</Text>
      <Text style={{ fontSize: 14}}>{JSON.stringify(description)}</Text>
      <Text style={{ fontSize: 14}}>{'Published: '}{JSON.stringify(published)}</Text>
      <Text style={{ fontSize: 14 }}>URL: {JSON.stringify(url)}</Text>
    </View>
  );
}