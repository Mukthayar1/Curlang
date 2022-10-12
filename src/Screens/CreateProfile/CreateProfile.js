import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, Pressable } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Assets from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import Assests from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp';
import TextLabel from '../../Components/Label';
import UserForm from './Forms/UserForm';
import BusinessForm from './Forms/BusinessForm';

function CreateProfile() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [profile, setprofile] = useState('')
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const uploadphoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            mediaType: 'photo'
        }).then(image => {
            setprofile(image);
        });
    }

    console.log('profile', profile?.path)

    return (
        <WrapperContainer>

            <ImageBackground source={Assets.greenbackground} style={[commonStyles.backgroundImage]}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.switchcontainer}>
                            <ToggleSwitch
                                isOn={isEnabled}
                                onColor="#fff"
                                offColor="#fff"
                                size="large"
                                icon={<View style={styles.switch} />}
                                onToggle={isOn => toggleSwitch()}
                            />
                            <Text style={[commonStyles.fontSizewhite13]}>{!isEnabled ? 'Business Form' : 'User Form'}</Text>
                        </View>

                        <Pressable style={styles.thumbnailcontainer} onPress={() => uploadphoto()}>
                            {profile?.path != undefined ?
                                <Image source={{uri:profile?.path}} style={styles.profile} resizeMode={'cover'} />
                                :
                                <Image source={Assests.UploadThumbnail} style={styles.thumbnail} resizeMode={'contain'} />
                            }
                        </Pressable>

                        <ButtonComp
                            btnText='Upload Photo'
                            onPress={uploadphoto}
                            type={'3'}
                            width={'30%'}
                        />

                        <TextLabel label={'MICHEAL AXE'} textAlign={'center'} marginTop={10} fontSize={22} />

                        {!isEnabled ? <BusinessForm /> : <UserForm />}

                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>

        </WrapperContainer>
    )
}

export default CreateProfile