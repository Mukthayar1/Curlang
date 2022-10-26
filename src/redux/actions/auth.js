import { FORGOT_PASSWORD, LOGIN_API, SIGNUP_API } from '../../config/urls';
import { apiPost, clearUserData, setUserData } from '../../utils/utils';
import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;
import { Alert } from 'react-native';
import { API_BASE_URL } from '../../config/urls';


export function signUp(data, SetisLoading) {
  // return apiPost(SIGNUP_API, data);
  var requestOptions = { method: 'POST'};


  fetch(`${API_BASE_URL}${data}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      console.log(result)

      if (result?.ResponseType == 0) {
        Alert.alert(result.Msg)
      }

      if (result?.ResponseType == 1) {
        Alert.alert(result.Msg)
      }

      SetisLoading(false);
      
    })
    .catch(error => {
      SetisLoading(false)
      console.log('error', error)
    });
}


export const login = (data) => {
  dispatch(saveUserData(data));

  //saveUserData is a function which is define in reducer state

  // ************* uncomment below code in case of api*************** ///

  // console.log(data, 'the given data')
  // return new Promise((resolve, reject) => {
  //   apiPost(LOGIN_API, data)
  //     .then((res) => {
  //       setUserData(res.data).then((suc) => {
  //         dispatch(saveUserData(res.data));
  //         resolve(res);
  //       });
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });
};




export function forgotPassword(data) {
  return apiPost(FORGOT_PASSWORD, data)
}

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}

