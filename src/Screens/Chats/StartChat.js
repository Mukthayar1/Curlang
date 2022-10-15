import React, { useState, useCallback } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import {
  PatentHeader,
  User,
  DrawerIcon,
  SendMessage,
  ArrowDown,
  LocationGrey,
  Clock,
  Back,
  UserTwo
} from '../../../constants/Images';

import Label from '../../../Containers/TextContainers/Label';
import BackHeader from '../../../components/CustomHeader/BackHeader/BackHeader';
import UserChatCards from './UserChatCards';
import EventData from '../../../constants/Markersmix'
import TextLabel from '../../../Containers/TextContainers/Label';
import COLORS from '../../../constants/theme';


export default function UserList(props) {
  const navigation = useNavigation()


  const chats = [
    {
      msg: "Hi...",
      id: 1,
      time: '3 mins ago'
    },
    {
      msg: "I cain’t Monday.. Sorry",
      id: 2,
      time: '3 mins ago'
    },
    {
      msg: "How about next wenesday?",
      id: 2,
      time: '3 mins ago'
    }
  ]

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'cover'}
        source={PatentHeader}
        style={styles.Headerbg}>
        <View style={styles.ChatHeader}>
          <View style={styles.row}>
            <Pressable onPress={() => navigation.goBack()} >
              <Image source={Back} style={styles.back} resizeMode={'contain'} />
            </Pressable>
            <Image source={UserTwo} style={styles.user} resizeMode={'contain'} />
            <View>
              <TextLabel label={'Alex shawn'} fontSize={17} color={'#000'} />
              <TextLabel label={'Last seen 20 mins ago'} fontSize={13} color={COLORS.COLOR3} />
            </View>
          </View>

          <View style={[styles.row, { marginRight: 15 }]}>
            <Image source={Clock} style={[styles.Clock]} />
            <TextLabel label={'8mins 40sec'} color={'green'} fontSize={12} />
          </View>

        </View>
      </ImageBackground>


      <View style={[styles.row, { width: '90%', alignSelf: 'center', borderBottomWidth: 2, borderColor: COLORS.COLOR3, paddingBottom: 10 }]}>
        <View style={styles.row}>
          <Image source={LocationGrey} style={[styles.Clock]} resizeMode={'contain'} />
          <Label label={'My location ...'} fontSize={14} color={COLORS.COLOR3} />
        </View>
        <Label label={'39 METERS AWAY'} fontSize={14} color={COLORS.COLOR3} />
      </View>


      <ScrollView style={styles.ScrollView}>
        {chats.map((value, index) => {
          return (
            <View style={[styles.msgcontainer, { alignItems: value.id == 1 ? 'flex-start' : 'flex-end' }]}>
              <View style={value.id == 1 ? styles.mymsg : styles.othermsg}>
                <TextLabel label={value.msg} color={value.id == 1 ? '#000' : '#fff'} />
              </View>
              <TextLabel label={value.time} marginLeft={-5} fontSize={12} color={'#000'} marginTop={2} />
            </View>
          )
        })}
      </ScrollView>
      {/* [styles.msg,{ alignItems: value.id == 1 ? 'flex-start' : 'flex-end' }] */}


      <View style={styles.SendMsgContainer}>
        <TextInput numberOfLines={2} placeholder='Write something here...' placeholderTextColor={COLORS.COLOR3} style={styles.TextInput} />
        <Image source={SendMessage} style={styles.SendMessage} />
      </View>

    </View>
  );
}
