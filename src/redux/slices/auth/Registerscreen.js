// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import Loader from './Loader';
import LoginScreen from './Loginscreen';
const RegisterScreen = (props) => {
  const [userLastName, setUserLastName] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const firstNameInputRef = createRef();
  const emailInputRef = createRef(); 
  const passwordInputRef = createRef();
  const confirmpwInputRef = createRef();



  const handleSubmitButton = () => {
    setErrortext('');
    if (!userLastName) {
      alert('Please fill Last name');
      return;
    }
    if (!userFirstName) {
      alert('Please fill First name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    
    if (!confirmPassword) {
      alert('Please fill confirm Password');
      return;
    }
    if(userPassword !== confirmPassword){
      alert('Password do not match');
      return;
    }
    
    //Show Loader
    setLoading(true);
    var dataToSend = {
      lastname: userLastName,
      firstname: userFirstName,
      email: userEmail,
      password: userPassword,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });

  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>

        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Loader loading={loading} />
      <Text style={styles.header}>Welcome to Food Forum!</Text>
          <View style={styles.inputTextWrapper}>
            
            <TextInput
              style={styles.textInput}
              onChangeText={(UserLastName) => setUserLastName(UserLastName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                firstNameInputRef.current && firstNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(UserFirstName) => setUserFirstName(UserFirstName)}
              underlineColorAndroid="#f000"
              placeholder="Enter First Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={firstNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputTextWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputTextWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                confirmpwInputRef.current &&
                confirmpwInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputTextWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(ConfirmPassword) =>
                setConfirmPassword(ConfirmPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter confirm password"
              placeholderTextColor="#8b9cb5"
              ref={confirmpwInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <View style={styles.tosignup }>
            <Text>Already have an account?</Text>
            <Button
          title="sign in"
          onPress={() => {
             props.navigation.navigate('Loginscreen');
          }}
        />
          </View>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  
  header: {
    fontWeight: 'bold',
    top: 140,
    fontSize: 25,
    padding: 12,
    margin: 5,
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
    backgroundColor: 'white'
  },
  inputTextWrapper: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 24,
  },
  textInput: {
    top: 160,
    height: 50,
    backgroundColor: '#F2F1F1',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'grey',
    paddingRight: 100,
    paddingHorizontal: 25,
  },
  buttonStyle: {
    top: 180,
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  tosignup: {
    alignItems: 'center',
    top: 160,
    height: 70,
    padding: 16,    
  }
});