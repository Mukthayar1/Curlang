import React from 'react';

import ProfileSlider from '../Components/ProfileImageSilder/ProfileSlider'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import colors from '../styles/colors';
import { moderateScale, verticalScale, scale } from '../styles/responsiveSize';
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

                <View style={[styles.row2, { marginRight: 10 }]}>
                    <Image source={Assets.Share} style={styles.share} />
                    <Image source={Assets.sharemenu} style={styles.share2} />
                </View>

            </View>
            <ProfileSlider />
            <View style={styles.row3}>
                <Text style={styles.details}>Jhon Alex &
                    <Text style={styles.details2}> 4,588</Text>
                    <Text> Like this Photo</Text>
                </Text>

                <Text style={styles.postinfo}>SACRIFICE | VIRUS
                    <Text style={styles.postinfo2}> this photomanipulation inspired in the virus </Text>
                </Text>

                <Text style={styles.comments}>View 500 Comments</Text>

                <Text style={[styles.postinfo,{paddingBottom:10}]}>Perla_Pipol
                    <Text style={styles.postinfo2}>Nice Picture Great Artwork!!</Text>
                </Text>

            </View>
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
        // alignItems: "center",
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
    row3: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    share: {
        marginRight: 10
    },
    details:{
        fontSize:scale(10),
        color:colors.white,
        textAlign:"left",
        marginLeft:moderateScale(22),
        marginTop:-10,
        // paddingBottom:10
    },
    details2:{
        color:colors.orange1
    },
    postinfo:{
        fontSize:scale(10),
        fontWeight:'bold',
        color:colors.white,
        textAlign:"left",
        marginLeft:moderateScale(22),
        marginTop:5,
        paddingBottom:5
    },
    postinfo2:{
        fontSize:scale(10),
        textAlign:"left",
        marginLeft:moderateScale(22),
        marginTop:5,
    },
    comments:{
        fontSize:scale(10),
        color:colors.white,
        textAlign:"left",
        marginLeft:moderateScale(22),
        opacity:0.5

    }
})

export default PostView
