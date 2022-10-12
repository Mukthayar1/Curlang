import React, { useState } from 'react'
import { Image, View, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputWithLabel from '../../../Components/TextInputWithLabel'
import commonStyles from '../../../styles/commonStyles'
import { moderateScale } from '../../../styles/responsiveSize';
import DropDown from '../../../Components/DropDown';
import styles from '../styles'
import TextLabel from '../../../Components/Label';
import Asssests from '../../../constants/imagePath'
import HorizontalList from '../HorizontalList';
import ButtonComp from '../../../Components/ButtonComp'
import colors from '../../../styles/colors'

function BusinessForm() {

    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [age, setage] = useState();
    const [gender, setgender] = useState();
    const [perhour, setperhour] = useState();
    const [totalcourse, settotalcourse] = useState();

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




    // console.log('gander===>',gender)


    return (
        <KeyboardAwareScrollView>
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
                {/* <TextInputWithLabel
                    label={' Your Age '}
                    value={age}
                    type={'white'}
                    onChangeText={(e) => setage(e)}
                    placeholder={'Age'}
                    keyboardType={'number-pad'}
                  /> */}
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
                    type={'short'} label={'Gender'}  placeholder={'Select'} />

            </View>

            <View>
                <TextLabel label={'About Me'} marginLeft={20} marginBottom={10} marginTop={10} fontSize={16} />
                <TextInput
                    style={styles.textarea}
                    placeholder='Introduce yourself'
                    multiline={true}
                    placeholderTextColor={'#fff'}
                />
            </View>

            <TextLabel label={'Fee'} marginLeft={30} marginBottom={0} marginTop={20} fontSize={16} />
            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <DropDown data={[
                    { label: '50$/hr', value: '50$/hr', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '20$/hr', value: '20$/hr', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '10$/hr', value: '10$/hr', icon: () => <Image source={Asssests.Pakistan} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={perhour} setvalue={setperhour}
                    type={'short'}  placeholder={'Select'} />

                <DropDown data={[
                    { label: '250$/Course', value: '1', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '100$/Course', value: '2', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '190$/Course', value: '3', icon: () => <Image source={Asssests.Pakistan} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={totalcourse} setvalue={settotalcourse}
                    type={'medium'}
                    placeholder={'Select'} />

            </View>

            <HorizontalList data={StudentList} type={0} label={'Student List'} />
            <HorizontalList data={Courses} type={1} label={'Eligible Courses'} />

            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <ButtonComp
                    btnText='Clear'
                    onPress={() => { }}
                    // type={'4'}
                    marginTop={10}
                    width={'40%'}
                    borderColor={'#fff'}
                />

                <ButtonComp
                    btnText='Save'
                    onPress={() => { }}
                    type={'4'}
                    marginTop={10}
                    width={'40%'}
                    backgroundColor={colors.orange1}
                />

            </View>




        </KeyboardAwareScrollView>
    )
}

export default BusinessForm