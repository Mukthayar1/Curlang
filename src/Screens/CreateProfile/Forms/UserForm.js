import React, { useState } from 'react'
import { Image, View, Pressable } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';


import TextInputWithLabel from '../../../Components/TextInputWithLabel'
import commonStyles from '../../../styles/commonStyles'
import { moderateScale, verticalScale } from '../../../styles/responsiveSize';
import DropDown from '../../../Components/DropDown';
import styles from '../styles'
import TextLabel from '../../../Components/Label';
import Asssests from '../../../constants/imagePath'
import ButtonComp from '../../../Components/ButtonComp'
import colors from '../../../styles/colors'

function BusinessForm() {

    const [nickname, setnickname] = useState('')
    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [age, setage] = useState();
    const [gender, setgender] = useState();
    const [lang, setlang] = useState([]);
    const [learnlang, setlearnlang] = useState();
    const [country, setcountry] = useState();
    const [interest, serinterest] = useState([])
    const [interest2, serinterest2] = useState([])
    const [travelphotos, settravelphotos] = useState([]);


    const uploadphoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            multiple: true,
            mediaType: 'photo'
        }).then(image => {
            console.log(image);
            if (image?.length > 0) {
                settravelphotos(image)
            }

        });
    }

    const removeItem = (id) => {
        let arr = interest
        let filter = arr.filter((item, index) => index != id);
        serinterest(filter)
    }



    return (
        <KeyboardAwareScrollView>

            <View style={{ marginTop: moderateScale(20) }}>
                <TextInputWithLabel
                    label={'Your Nick Name'}
                    value={nickname}
                    // type={'white'}
                    onChangeText={(e) => setnickname(e)}
                    placeholder={'Your Nick Name'}
                    borderColor={'#fff'}
                    placeholderTextColor={'white'}
                    Labelcolors={'#fff'}
                />
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
                    { label: 'French', value: 'French' },
                    { label: 'Chinese', value: 'Chinese' },
                    { label: 'American', value: 'American' }]}
                    value={lang} setvalue={setlang}
                    type={'long'} label={'Native Languages'} placeholder={'Select'}
                    multiple={true}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
            </View>

            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <DropDown data={[
                    { label: 'French', value: 'French', icon: () => <Image source={Asssests.France} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: 'Chinese', value: 'Chinese', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: 'American', value: 'American', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={learnlang} setvalue={setlearnlang}
                    type={'long'}
                    label={'Desired Languages'}
                    placeholder={'Select'}
                    zIndex={2000}
                    zIndexInverse={2000} />
            </View>



            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <DropDown data={[
                    { label: 'French', value: 'French', icon: () => <Image source={Asssests.France} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: 'Chinese', value: 'Chinese', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: 'American', value: 'American', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={country} setvalue={setcountry}
                    type={'medium'} label={'Favorite Country'} placeholder={'Select'} />

                <TextInputWithLabel
                    label={'Selected City'}
                    value={city}
                    type={'white'}
                    onChangeText={(e) => setage(e)}
                    placeholder={'City'} />
            </View>

            <View style={{ marginTop: moderateScale(20) }}>
                <TextInputWithLabel
                    label={'Add Interest'}
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


            <TextLabel label={'Travel Photos'} marginLeft={40} marginBottom={10} marginTop={10} fontSize={16} />
            <ButtonComp
                btnText='Add Photos'
                onPress={() => uploadphoto()}
                type={'4'}
                marginTop={10}
                width={'80%'}
                backgroundColor={colors.orange1}
            />

            <View style={styles.imagecontainer}>
                {travelphotos.map((v, k) => {
                    return (
                        <View style={styles.travelimagcontainer} key={k}>
                            <Image source={{ uri: v.path }} style={styles.travelimag} />
                        </View>
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




        </KeyboardAwareScrollView>
    )
}

export default BusinessForm