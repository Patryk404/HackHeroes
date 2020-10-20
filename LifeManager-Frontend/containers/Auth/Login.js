import React from 'react'
import {View,Text,Image,ActivityIndicator,StyleSheet} from 'react-native';
import {Button,Input} from 'react-native-elements';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

import axios from 'axios';
import {URL} from '../../public/url';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        loading: false,
        error: ''
    };

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
            this.setState({loading: false});
            this.setState({error: err});
            console.log(err);
        });
    };

    handleButtonRegister=()=>{
        this.props.navigation.navigate('Register');
    };

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../public/images/logo.png')} style={styles.image}/>
                <Text style={styles.text}>Manage Your Life😉</Text>
                <Input placeholder='Username' style={styles.input} value={this.state.username} onChangeText={value=>this.handleInputChange('username',value)}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={value=>this.handleInputChange('password',value)}/>
                {this.state.loading ? 
                <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 40}}/> :
                <View style={styles.button} >
                <Button title="Login" onPress={this.handleButtonLogin}/>
                </View>
                }
                {
                    this.state.error ? 
                    <Text>Wrong Username or Password🤔</Text>
                    : null
                }
                <Text style={{marginTop: 30}}>No Account? <Text onPress={this.handleButtonRegister} style={{color: 'blue'}}>Register Now</Text></Text>
            </View>
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
        marginTop: '35%',
        textAlign: 'center',
        color: 'black'
    },
    image:{
        position: 'absolute',
        width: 150,
        height: 150
    },
    input: {
        marginTop: 20
    },
    button: {
        width: '50%',
        marginTop: 40
    }
  });

  const mapDispatchToProps = dispatch =>{
      return {
    onLogged: token=>dispatch(actions.loggedInto(token))
    };
  };   
  
export default connect(null,mapDispatchToProps)(Login);