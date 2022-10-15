import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Assets from '../constants/imagePath';
import AppDefaultGrdiantContainer from './GrdiantView';
import { moderateScale, verticalScale, scale } from '../styles/responsiveSize';
import StatusBarHeight from '../styles/responsiveSize';
import colors from '../styles/colors';
import TextLabel from './Label';
import navigationStrings from '../constants/navigationStrings';

function CustomHeader({ label, header2 }) {
    const navigation = useNavigation()
    return (
        <AppDefaultGrdiantContainer style={styles.container} header2={header2}>
            <Image source={Assets.HeaderAdd} style={[styles.icon,
            header2 == true ? { tintColor: colors.darkgreen } : {}
            ]} resizeMode={'contain'} />
            {label ?

                <TextLabel label={label} fontSize={25} color={colors.black} fontWeight={'500'} />
                :
                <Image source={Assets.AppIcons2} style={styles.appicon} resizeMode={'contain'} />
            }
            <Pressable onPress={()=>navigation.navigate(navigationStrings.UserList)}>
                <Image source={Assets.HeaderChat} style={[styles.icon,
                header2 == true ? { tintColor: colors.darkgreen } : {}
                ]} resizeMode={'contain'} />
            </Pressable>
        </AppDefaultGrdiantContainer>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: verticalScale(100),
        paddingTop: 10 - StatusBarHeight,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20)
    },
    icon: {
        height: verticalScale(25),
        width: moderateScale(25),

    },
    appicon: {
        height: verticalScale(80),
        width: moderateScale(100)
    },
    label: {
        color: colors.white,
        fontSize: scale(20)
    }

})