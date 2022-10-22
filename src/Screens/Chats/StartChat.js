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
import CustomHeader from '../../Components/CustomHeader';
import colors from '../../styles/colors';
import TextLabel from '../../Components/Label';
import Assets from '../../constants/imagePath'
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';
import navigationStrings from '../../constants/navigationStrings';

export default function UserList(props) {
  const navigation = useNavigation()


  const chats = [
    {
      msg: "How Was Your Day?",
      id: 1,
      time: '3 mins ago'
    },
    {
      msg: "Bored! af",
      id: 2,
      time: '3 mins ago'
    },
    {
      msg: "What Have You Being doing?",
      id: 1,
      time: '3 mins ago'
    },
    {
      msg: "It's None of Your Business",
      id: 2,
      time: '3 mins ago'
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur ad scing elit, sed do .",
      id: 2,
      time: '3 mins ago'
    },
    {
      type: 'media',
      id: 1,
      time: '3 mins ago',
      image: require('../../assets/images/avatar.png')
    }
  ]

  return (
    <View style={styles.container}>

      <CustomHeader label={'Jhon Mick'} header2={true} type={'chat'} />

      <AppDefaultGrdiantContainer style={styles.callcontainer}>
        <Pressable onPress={()=>navigation.navigate(navigationStrings.AudioCall)}>
          <Image source={Assets.Call} style={[styles.icons, { marginLeft: 10 }]} resizeMode={'contain'} />
        </Pressable>
        <View style={styles.whitelines} />
        <Pressable onPress={()=>navigation.navigate(navigationStrings.VideoCall)}>
          <Image source={Assets.Vcall} style={[styles.icons, { marginLeft: 10 }]} resizeMode={'contain'} />
        </Pressable>

      </AppDefaultGrdiantContainer>

      <ScrollView style={styles.ScrollView} contentContainerStyle={{ marginTop: 20 }}>
        {chats.map((value, index) => {
          return (
            <>
              {value.id == 1 ?
                <View key={index} style={[styles.msgcontainer, { alignItems: 'flex-start', flexDirection: "row" }]}>

                  <Image source={Assets.User} style={styles.userimage} resizeMode={'contain'} />

                  {value?.type != 'media' ?
                    <View style={value.id == 1 ? styles.mymsg : styles.othermsg}>
                      <TextLabel label={value.msg} color={value.id == 1 ? '#000' : '#fff'} />
                    </View>
                    :
                    <>
                      {value?.image != undefined ?
                        <Image source={value.image} style={styles.imgechat} />
                        : null}
                    </>
                  }

                </View>

                :
                <View key={index} style={[styles.msgcontainer, { alignItems: 'flex-end' }]}>
                  {value?.type != 'media' ?
                    <View style={value.id == 1 ? styles.mymsg : styles.othermsg}>
                      <TextLabel label={value.msg} color={value.id == 1 ? '#000' : '#fff'} />
                    </View>
                    :
                    <>
                      {value?.image != undefined ?
                        <Image source={value.image} style={styles.imgechat} />
                        : null}
                    </>
                  }
                </View>
              }
            </>
          )
        })}
      </ScrollView>

      {/* <AppDefaultGrdiantContainer style={styles.lines2}/> */}

      <AppDefaultGrdiantContainer style={styles.SendMsgContainer}>

        <View style={styles.chatcontainer}>

          <Image source={Assets.Attachments} style={[styles.icons, { marginRight: 10 }]} resizeMode={'contain'} />

          <View style={styles.chatmessage}>
            <TextInput numberOfLines={2} placeholder='Write a message' placeholderTextColor={colors.white} style={styles.TextInput} />
            <Image source={Assets.Sendmsg} style={styles.SendMessage} resizeMode={'contain'} />
          </View>

          <Image source={Assets.Emojie} style={[styles.icons, { marginLeft: 10 }]} resizeMode={'contain'} />

        </View>

      </AppDefaultGrdiantContainer>

    </View>
  );
}
