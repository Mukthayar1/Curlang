import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

import CustomHeader from '../../Components/CustomHeader';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import Assets from '../../constants/imagePath';
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import TableStories from '../../Components/Stories/TableStories';
import AnimatedHeader from './ProfileHeader/AnimatedHeader';

import TabsView from './Tabs'

const Profile = ({ navigation }) => {
    return (
        <WrapperContainer backgroundColor={colors.white}>
            <ProfileHeader />
            <TableStories />
            <TabsView />

            {/* <AnimatedHeader/> */}
        </WrapperContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    searchbar: {
        width: '95%',
        height: verticalScale(50),
        alignSelf: 'center',
        marginBottom: moderateScale(10)
        // backgroundColor:'pink'
    }
});

export default Profile