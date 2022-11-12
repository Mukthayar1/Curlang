import { Alert } from 'react-native';
import { API_BASE_URL } from '../../config/urls';

import { LoginUser, Step, UserDetail } from '../Reducers/AuthReducer/AuthReducer';



export function signUp(data, SetisLoading, navigation) {
    var requestOptions = { method: 'POST' };

    fetch(`${API_BASE_URL}${data}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result?.ResponseType == 0) Alert.alert(result.Msg)

            if (result?.ResponseType == 1) {
                Alert.alert('Account Created Successfully, Login To Continue !')
                navigation.goBack()
            }
            SetisLoading(false);

        })
        .catch(error => {
            SetisLoading(false)
            console.log('error signUp', error)
        });
}


export const login = (data, SetisLoading, dispatch) => {

    var requestOptions = { method: 'GET' };

    fetch(`${API_BASE_URL}${data}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result?.ResponseType == 0) Alert.alert(result.Msg)
            if (result?.ResponseType == 1) {

                dispatch(LoginUser(true));
                dispatch(Step(result?.ProfileID))
                dispatch(UserDetail(result?.Data));
                console.log('first', result)
            }

            SetisLoading(false)

        })
        .catch(error => {
            SetisLoading(false)
            console.log('error login ', error)
        });
}

export const CreateProfile = (Body, SetisLoading, dispatch) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(Body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}/create-profile`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('Result By Save', result?.Msg);
            if(result?.Msg =='Successfully Saved!')
            {
                dispatch(LoginUser(true));
                dispatch(Step(result?.ProfileID))
                dispatch(UserDetail(result?.Data));
            }
            SetisLoading(false)
        })
        .catch(error => {
            console.log('error', error)
            SetisLoading(false)
        });


}







