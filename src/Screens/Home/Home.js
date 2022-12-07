import React, { useEffect } from 'react'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import commonStyles from '../../styles/commonStyles'
import Asssests from '../../constants/imagePath'
import CustomHeader from '../../Components/CustomHeader';
import { GetAllCourses } from '../../store/Action/actions';
//Comp
import Stories from '../../Components/Stories/TableStories';
import SearchBar from './Comp/SearchBar'
import PostView from '../../Components/PostView'
import TeacherCards from './TeacherCards';
import SuggestionContainer from '../../Components/SuggestionContainer'

function Home() {

  const UserDetails = useSelector((state) => state?.AuthReducer?.UserDetail);
  const dispatch = useDispatch()
  useEffect(() => {
    GetAllCourses(UserDetails?.UserID, dispatch)
  }, []);

  console.log('UserDetails',UserDetails?.ProfilePic)

  return (

    <ImageBackground source={Asssests.greenbackground} style={[commonStyles.backgroundImage]}>
      <CustomHeader />
      <ScrollView >

        <Stories />

        <SearchBar />

        <PostView />

        <TeacherCards />

        <SuggestionContainer />

        <PostView />

        <View style={{ height: 100, width: "100%" }} />

      </ScrollView>
    </ImageBackground>


  )
}

export default Home
