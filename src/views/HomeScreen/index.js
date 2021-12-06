import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
//import database from '../../config/firebase';

export default function HomeScreen({navigation}) {
  const [task, setTask] = useState([]);

  // useEffect(() => {
  //   database.collection('app').onSnapshot(query => {
  //     const list = [];
  //     query.forEach(doc => {
  //       list.push({...doc.data(), id: doc.id});
  //     });
  //     setTask(list);
  //   });
  // }, []);

  console.log(task, 'task');
  const deleteTask = id => {
    database.collection('app').doc(id).delete();
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={item => {
          <View style={styles.task}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => deleteTask(item.id)}>
              <Icon name="star" size={18} color="#999" />
            </TouchableOpacity>
            <Text
              style={styles.descriptionTask}
              onPress={() =>
                navigation.navigate('Details', {
                  id: item.id,
                  description: item.description,
                })
              }>
              {item.description}
            </Text>
          </View>;
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('New Task')}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
