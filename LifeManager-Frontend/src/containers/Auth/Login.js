import React from 'react'
import {View,Text,SafeAreaView,ScrollView,Image,ActivityIndicator,StyleSheet} from 'react-native';
import {Button,Input,CheckBox} from 'react-native-elements';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

import axios from 'axios';
import {URL} from '../../public/url';

import * as Keychain from 'react-native-keychain';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        loading: false,
        error: '',
        rememberMe: false
    };

    async componentDidMount(){
        if(await Keychain.getGenericPassword()){
            const credentials = await Keychain.getGenericPassword();
            this.setState({rememberMe: true,username: credentials.username, password: credentials.password});
        }
    }
    
    async componentDidUpdate(){
        if(this.state.rememberMe===true){
            await this.saveUser();
        }
        else {
            await this.lostUser();
        }
    }

    saveUser = async()=>{
        if(this.state.username && this.state.password)
        {
        await Keychain.setGenericPassword(this.state.username,this.state.password);
        }
        else {
            alert("Fill username and password");
            this.setState({rememberMe: false});
        }
    }

    lostUser = async()=>{
        await Keychain.resetGenericPassword();
    }

    handleCheckBoxChange = ()=>{
        this.setState({rememberMe: !this.state.rememberMe});
    }

    handleInputChange =(name,value)=>{
        this.setState({
        [name]: value
        });
    };

    handleButtonLogin=()=>{
        this.setState({
            loading: true
        });
        axios.post(URL+'/auth/login',{
            username: this.state.username,
            password: this.state.password
        },{headers:{
            'Content-Type': 'application/json'
          }})
        .then(response=>{
            this.setState({loading: false});
            this.props.onLogged(response.data.token);
            this.props.navigation.navigate('MainApp');
        })
        .catch(err=>{
            this.setState({loading: false,error: err});
            console.log(err);
        });
    };

    handleButtonRegister=()=>{
        this.props.navigation.navigate('Register');
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Image source={require('../../public/images/logo.png')} style={styles.image}/>
                    <Text style={styles.text}>Manage Your Life😉</Text>
                    <Input placeholder='Username' style={styles.input} value={this.state.username} onChangeText={value=>this.handleInputChange('username',value)}/>
                    <Input placeholder='Password' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={value=>this.handleInputChange('password',value)}/>
                    {
                    this.state.loading 
                    ? 
                    <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 40}}/> 
                    :
                    <View style={styles.button} >
                    <Button title="Login" onPress={this.handleButtonLogin}/>
                    </View>
                    }
                    {
                        this.state.error ? 
                        <Text style={{alignSelf: 'center'}}>Wrong Username or Password🤔</Text>
                        : null
                    }
                    <View style={styles.checkBox}>
                        <CheckBox onPress={this.handleCheckBoxChange} checked={this.state.rememberMe} title="Remember Me"/>
                    </View>
                    <Text style={{marginTop: 30,alignSelf: 'center'}}>No Account? <Text onPress={this.handleButtonRegister} style={{color: 'blue'}}>Register Now</Text></Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    text:{
        fontSize: 40,
        marginTop: '2%',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'
    },
    image:{
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    input: {
        marginTop: 20
    },
    button: {
        width: '50%',
        marginTop: 40,
        alignSelf: 'center'
    },
    checkBox:{
        marginTop: 20,
        width: '50%',
        alignSelf: 'center'
    }
  });

  const mapDispatchToProps = dispatch =>{
      return {
        onLogged: token=>dispatch(actions.loggedInto(token))
    };
  };   
  
export default connect(null,mapDispatchToProps)(Login);