//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../../Components/ButtonComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import navigationStrings from '../../../constants/navigationStrings';
import actions from '../../../redux/actions';
import Assets from '../../../constants/imagePath'
import commonStyles from '../../../styles/commonStyles';
import TextInput from '../../../Components/TextInputs';
import AppDefaultGrdiantContainer from '../../../Components/GrdiantView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';

const Login = ({ navigation }) => {

    const [username, setusername] = useState();
    const [pass, setpass] = useState();
    // const navigation = useNavigation()


    const onLogin = () => {
        actions.login(true)
    }

    const ForgotPass = () => {
        actions.login(true)
    }

    const Signup = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }

    return (
        <WrapperContainer>

            <View style={styles.container}>

                <ImageBackground source={Assets.AuthBg} style={[commonStyles.backgroundImage, { justifyContent: "center", }]}>

                    <Image source={Assets.AppIcons2} style={commonStyles.AppIcons2} resizeMethod={'resize'} resizeMode={'contain'} />

                    <TextInput
                        value={username}
                        onChangeText={(e) => setusername(e)}
                        placeholder={'username'} />

                    <TextInput
                        value={pass}
                        secureTextEntry={true}
                        onChangeText={(e) => setpass(e)}
                        placeholder={'Password'} />

                    <ButtonComp
                        btnText='Forgot Password'
                        onPress={ForgotPass}
                        type={'0'}
                         />

                    <AppDefaultGrdiantContainer style={styles.gradinatButton}>
                        <ButtonComp
                            btnText='Login'
                            onPress={onLogin}
                            type={'1'} />
                    </AppDefaultGrdiantContainer>

                    <ButtonComp
                        btnText='Create Account'
                        onPress={Signup}
                        type={'2'}
                    />

                </ImageBackground>
            </View>

        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradinatButton: {
        width: "80%",
        alignSelf: "center",
        height: moderateScale(48),
        marginBottom: moderateScale(20),
        borderRadius: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(8),
    },
});

//make this component available to the app
export default Login;
