// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import ButtonComp from '../../Components/ButtonComp';
// import CustomHeader from '../../Components/CustomHeader';

// import actions from '../../redux/actions';

// // create a component
// const Home = () => {

//   const onLogout  = () =>{
//       actions.logout()
//   }
//   return (
//     <View style={styles.container}>
//      <ButtonComp 
//      btnText='LOGOUT'
//      onPress={onLogout}

//      />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default Home;

import React, { useState } from 'react'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import TextInputWithLabel from '../../Components/TextInputWithLabel'
import commonStyles from '../../styles/commonStyles'
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import DropDown from '../../Components/DropDown';
import styles from '../CreateProfile/styles'
import TextLabel from '../../Components/Label';
import Asssests from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'
import colors from '../../styles/colors'
import CustomHeader from '../../Components/CustomHeader';
import WrapperContainer from '../../Components/WrapperContainer'

//Comp
import Stories from '../../Components/Stories/TableStories';
import SearchBar from './Comp/SearchBar'

function Home() {
  return (

    <ImageBackground source={Asssests.greenbackground} style={[commonStyles.backgroundImage]}>
      <CustomHeader />
      <ScrollView>
        <Stories />
        <SearchBar />
      </ScrollView>
    </ImageBackground>


  )
}

export default Home
