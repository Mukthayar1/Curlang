import React from 'react';

import ProfileSlider from '../Components/ProfileImageSilder/ProfileSlider'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView, StyleSheet } from 'react-native'
import colors from '../styles/colors';
import { moderateScale, verticalScale } from '../styles/responsiveSize';
import Assets from '../constants/imagePath'
import TextLabel from './Label';

function PostView() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.row2}>
                    <Image source={Assets.User} style={styles.user} />
                    <View>
                        <TextLabel label={'Maoo.lopez'} color={'#fff'} fontSize={17} />
                        <TextLabel label={'Hace 20 min'} color={'#7DCEA0'} fontSize={10} marginTop={-2} />
                    </View>

                </View>

                <View style={[styles.row2,{marginRight:10}]}>
                    <Image source={Assets.Share} style={styles.share} />
                    <Image source={Assets.sharemenu} style={styles.share2}  />
                </View>

            </View>
            <ProfileSlider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16A085',
        width: '90%',
        alignSelf: "center",
        marginTop: moderateScale(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(20)
    },
    Header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: moderateScale(15)
    },
    user: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    share:{
        marginRight:10
    }
})

export default PostView
