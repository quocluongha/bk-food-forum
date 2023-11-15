import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from '../components/Header';
import Recent from '../components/Recent';
import Ealier from "../components/Ealier";
const newlist = [
  {
      username: 'Campbell',
      img: require('../assets/christopher-campbell.jpg'),
      content: ' mentioned you in a comment in an event',
      timeAct: '3 hours ago',
      id:1,
  },
  {
      username: 'Jurica',
      img: require('../assets/jurica.jpg'),
      content: ' posted a recipe in a seafood thread.',
      timeAct: 'yesterday',
      id:2,
  }, 
]
const earlierlist = [
  {
      username: 'Brooke',
      img: require('../assets/brooke.jpg'),
      content: ' started following you.',
      timeAct: '5 days ago',
      id:1,
  },
  {
      username: 'Stefan',
      img: require('../assets/stefan.jpg'),
      content: ' shared your recipes.',
      timeAct: '6 days ago',
      id:2,
  },
  {
      username: 'Vicky',
      img: require('../assets/vicky.jpg'),
      content: ' commented on your recipe.',
      timeAct: 'a week ago',
      id:3,
  },
  {
      username: 'Jurica',
      img: require('../assets/jurica.jpg'),
      content: ' posted a recipe in a seafood thread.',
      timeAct: 'yesterday',
      id:4,
  }, 
  {
      username: 'Jurica',
      img: require('../assets/jurica.jpg'),
      content: ' posted a recipe in a seafood thread.',
      timeAct: 'yesterday',
      id:5,
  }
]
const NotiScreen = () => {
  return (
  <View style={styles.container}>
    <Header/>
    <StatusBar barStyle='light-content'/>
    <Text style={styles.labelstyle}>New</Text>
    <FlatList 
      data={newlist}
      renderItem={({item}) => {
        return <Recent info={item} />;
      }}
      keyExtractor={(newlist)=>newlist.id.toString()}
      showsVerticalScrollIndicator={false}
    />
    <Text style={styles.labelstyle}>Ealier</Text>
    <FlatList 
      data={earlierlist}
      renderItem={({ item }) => {
        return <Ealier info={item} />;
      }}
      keyExtractor={(earlierlist)=>earlierlist.id.toString()}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'space-between',
    },
    labelstyle: {
      fontSize: 22,
      fontWeight: '700',
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 10,
    }
  });
  
export default NotiScreen;