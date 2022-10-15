import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import UserChatCards from './UserChatCards';
import { USERLIST } from '../../config/FakeData';
import CustomHeader from '../../Components/CustomHeader';
import Stories from '../../Components/Stories/Stories';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';


export default function UserList(props) {
  const navigation = useNavigation()

  return (

    <View style={styles.container}>
      <CustomHeader label={'Messages'} header2={true} />
      <Stories/>
      <AppDefaultGrdiantContainer style={styles.lines}/>
      <FlatList
        data={USERLIST}
        renderItem={({item,index})=><UserChatCards item={item} index={index} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ marginTop: 20, paddingBottom: 80 }}
      />
    </View>

  );
}
