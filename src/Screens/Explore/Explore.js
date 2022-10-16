import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';


import CustomHeader from '../../Components/CustomHeader';
import Trends from './Trends/Trends';
import Posts from './Posts/Post';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import Assets from '../../constants/imagePath'
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';

const Explore = ({ navigation }) => {
    return (
        <WrapperContainer backgroundColor={colors.darkgreen}>

            <CustomHeader />
            
            <View>
                <Trends />
            </View>

            <Pressable onPress={() => navigation.navigate(navigationStrings.SEARCH)} style={styles.searchbar}>
                <Image source={Assets.SearchBar} style={styles.searchbar} resizeMode={'contain'} />
            </Pressable>

            <Posts />

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

export default Explore