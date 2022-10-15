import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function Stories() {
  const StoriesData = [
    {icon: require('../../assets/AddToStory.png'), Id: 0},
    {icon: require('../../assets/User2.png'), Id: 1},
    {icon: require('../../assets/User3.png'), Id: 2},
    {icon: require('../../assets/User4.png'), Id: 3},
    {icon: require('../../assets/User2.png'), Id: 4},
    {icon: require('../../assets/User1.png'), Id: 5},
  ];
  const renderItem = val => {
    return (
      <TouchableOpacity style={styles.imgcontainer}>
        <Image source={val.icon} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView horizontal={true}>
      {StoriesData.map((val, ind) => {
        return <View key={ind}>{renderItem(val)}</View>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderRadius: 40,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F45564',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});
