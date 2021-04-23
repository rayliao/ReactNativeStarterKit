import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

const SettingsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json())
      .then(json => setData(json.movies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.root}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id + index}
          renderItem={({
            item,
          }: {
            item: {id: string; title: string; releaseYear: string};
          }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

SettingsScreen.options = {
  topBar: {
    title: {text: 'Settings'},
  },
  bottomTab: {
    text: 'Settings',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SettingsScreen;
