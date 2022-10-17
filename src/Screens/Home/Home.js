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
import PostView from '../../Components/PostView'

function Home() {
  return (

    <ImageBackground source={Asssests.greenbackground} style={[commonStyles.backgroundImage]}>
      <CustomHeader />
      <ScrollView>
        <Stories />
        <SearchBar />
        <PostView />
      </ScrollView>
    </ImageBackground>


  )
}

export default Home
