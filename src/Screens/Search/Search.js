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

function BusinessForm() {

    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [age, setage] = useState();
    const [gender, setgender] = useState();
    const [perhour, setperhour] = useState();
    const [totalcourse, settotalcourse] = useState();
    const [interest, serinterest] = useState([]);
    const [interest2, serinterest2] = useState([]);
    const [cate, setcat] = useState([]);
    const [courses, setcourses] = useState([]);



    const StudentList = [
        { icon: Asssests.User, Id: 0 },
        { icon: Asssests.User2, Id: 1 },
        { icon: Asssests.User, Id: 2 },
        { icon: Asssests.User2, Id: 3 },
        { icon: Asssests.User, Id: 4 },
        { icon: Asssests.User2, Id: 5 },
    ];

    const Courses = [
        { icon: Asssests.America, Id: 0 },
        { icon: Asssests.China, Id: 1 },
        { icon: Asssests.America, Id: 2 },
        { icon: Asssests.Pakistan, Id: 3 },
        { icon: Asssests.America, Id: 4 },
        { icon: Asssests.China, Id: 5 },
    ];

    const removeItem = (id) => {
        let arr = interest
        let filter = arr.filter((item, index) => index != id);
        serinterest(filter)
    }





    // console.log('gander===>',gender)


    return (

        <ImageBackground source={Asssests.greenbackground} style={[commonStyles.backgroundImage]}>
            <CustomHeader label={'Search Filter'} color={'#fff'} />
            <ScrollView>
                {/* <KeyboardAwareScrollView style={{paddingBottom:100}}> */}
                <View>
                    <View style={[commonStyles.row, { marginTop: moderateScale(30) }]}>

                        <TextInputWithLabel
                            label={'Enter Your City'}
                            value={city}
                            type={'white'}
                            onChangeText={(e) => setcity(e)}
                            placeholder={'Your City'} />

                        <TextInputWithLabel
                            label={'Enter Your State'}
                            value={state}
                            type={'white'}
                            onChangeText={(e) => setstate(e)}
                            placeholder={'State'} />

                    </View>

                    <View style={[commonStyles.row]}>
                        <TextInputWithLabel
                            label={'Enter Your Age'}
                            value={age}
                            type={'white'}
                            keyboardType={'number-pad'}
                            onChangeText={(e) => setage(e)}
                            placeholder={'Your age'} />

                        <DropDown data={[
                            { label: 'Male', value: 'male' },
                            { label: 'Female', value: 'female' },
                            { label: 'Other', value: 'other' }]}
                            value={gender} setvalue={setgender}
                            type={'short'} label={'Gender'} placeholder={'Select'} />
                    </View>

                    <View style={[commonStyles.row, { marginTop: moderateScale(10) }]}>
                        <DropDown data={[
                            { label: 'Teacher', value: 'Teacher' },
                            { label: 'Student', value: 'Student' },
                            { label: 'User', value: 'User' }]}
                            value={cate} setvalue={setcat}
                            type={'long'} label={'Catagory'} placeholder={'Select'}
                            // multiple={true}
                            zIndex={3000}
                            zIndexInverse={1000}
                        />
                    </View>


                    <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                        <DropDown data={[
                            { label: 'French', value: 'French', icon: () => <Image source={Asssests.France} resizeMode={'contain'} style={styles.iconStyle} /> },
                            { label: 'Chinese', value: 'Chinese', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                            { label: 'American', value: 'American', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                            value={courses} setvalue={setcourses}
                            type={'long'}
                            label={'Courses'}
                            placeholder={'Select'}
                            zIndex={2000}
                            zIndexInverse={2000} />
                    </View>

                    <View>
                        <TextLabel label={'Descriptions'} marginLeft={20} marginBottom={10} marginTop={20} fontSize={16} />
                        <TextInput
                            style={styles.textarea}
                            placeholder='Descriptions Here'
                            multiline={true}
                            placeholderTextColor={'#fff'}
                        />
                    </View>


                    <View style={{ marginTop: moderateScale(20) }}>
                        <TextLabel label={'Add Interest'} marginLeft={20} marginBottom={-20} marginTop={10} fontSize={16} />
                        <TextInputWithLabel
                            // label={'Add Interest'}
                            value={interest2}
                            onChangeText={(e) => serinterest2(e)}
                            placeholder={'Add Your Interest'}
                            borderColor={'#fff'}
                            placeholderTextColor={'white'}
                            Labelcolors={'#fff'}
                            onSubmitEditing={(e) => {
                                if (interest2?.length > 0) {
                                    serinterest([...interest, interest2])
                                    serinterest2('')
                                }
                            }}
                        />
                    </View>

                    <View style={styles.imagecontainer}>
                        {interest.map((v, k) => {
                            return (
                                <Pressable style={styles.intresetview} key={k} onPress={() => removeItem(k)}>
                                    <TextLabel label={v} textAlign={'center'} marginBottom={10} marginTop={10} fontSize={15} color={colors.lightGreen} fontWeight={'500'} />
                                    <Image source={Asssests.cross} style={styles.cross} resizeMode={'contain'} />
                                </Pressable>
                            )
                        })}
                    </View>


                    <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                        <ButtonComp
                            btnText='Clear'
                            onPress={() => { }}
                            // type={'4'}
                            marginTop={10}
                            width={'35%'}
                            height={verticalScale(35)}
                            borderColor={'#fff'}
                        />

                        <ButtonComp
                            btnText='Save'
                            onPress={() => { }}
                            type={'4'}
                            marginTop={10}
                            width={'35%'}
                            height={verticalScale(35)}
                            backgroundColor={colors.orange1}
                        />

                    </View>
                </View>
            </ScrollView>
            {/* </KeyboardAwareScrollView> */}
        </ImageBackground>


    )
}

export default BusinessForm