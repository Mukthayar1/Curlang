import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TextLabel from '../../Components/Label';
import colors from '../../styles/colors';
import Assets from '../../constants/imagePath'
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';

export default function UsersCards({ item, index }) {
    const navigation = useNavigation()
    return (
        <AppDefaultGrdiantContainer style={styles.container} onPress={() => { }}>
            <View style={styles.row}>
                <View>
                    <Image source={Assets.User} style={styles.profile} resizeMode={'contain'} />
                    <Image source={Assets.China} style={styles.country} resizeMode={'contain'} />
                </View>
                <View>
                    <View style={styles.innerrow}>
                        <TextLabel label={item.name} color={colors.orange1} fontSize={17} fontWeight={'bold'} />
                        <TextLabel label={'A professional Spanish Teacher'} color={colors.white} fontSize={14} fontWeight={'bold'} />
                    </View>

                    <View style={[styles.row2, { marginLeft: moderateScale(5), marginTop: moderateScale(10) }]}>
                        <Pressable style={styles.btn}>
                            <TextLabel label={'Message'} color={colors.green} fontSize={10} />
                        </Pressable>
                        <Pressable style={styles.btn2}>
                            <TextLabel label={'Follow'} color={colors.orange1} fontSize={10} />
                        </Pressable>
                        <Pressable style={styles.btn2}>
                            <TextLabel label={'Add'} color={colors.orange1} fontSize={10} />
                        </Pressable>
                    </View>

                </View>




            </View>

        </AppDefaultGrdiantContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        // marginBottom: 20,
        // flexDirection: "row",
        // justifyContent: 'space-between',
        // marginTop: 10
    },
    profile: {
        height: verticalScale(70),
        width: moderateScale(70),
        borderWidth: 1,
        borderColor: colors.orange1,
        borderRadius: moderateScale(54)
        // borderRadius: 40
    },
    row: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
        paddingBottom: 20,
        alignSelf:'center'
    },
    row2: {
        // justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    innerrow: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },

    country: {
        height: verticalScale(20),
        width: moderateScale(20),
        position: 'absolute',
        right: -8,
        top: 2
    },
    btn: {
        backgroundColor: colors.orange1,
        padding: 5,
        marginLeft: 10,
        borderRadius: 15,
        width:moderateScale(70),
        justifyContent:"center",
        alignItems:"center"
    },
    btn2: {
        // backgroundColor:colors.orange1,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.orange1,
        marginLeft: 10,
        borderRadius: 15,
        width:moderateScale(70),
        justifyContent:"center",
        alignItems:"center"
    }
})
