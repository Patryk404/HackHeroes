import React from 'react'
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native';
import {Button,Input} from 'react-native-elements';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

import axios from 'axios';
import {URL} from '../../public/url';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        loading: false,
        error: undefined,
    };

    handleInputChange =(name,value)=>{
        this.setState({
        [name]: value
        });
    };

    handleButtonRegister=()=>{
        this.setState({loading: true});
        axios.post(URL+'/auth/signup',{
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        },{
            headers: {
               'Content-Type': 'application/json'
            }
        })
        .then(response=>{
            this.setState({loading: false});
            this.props.onLogged(response.data.token);
            this.props.navigation.navigate('MainApp');
        })
        .catch(err =>{
            this.setState({error: err,loading: false});
            console.log(err);
        })
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Make account😀</Text>
                <Input placeholder="Email" style={styles.input} value={this.state.email} onChangeText={value=>this.handleInputChange('email',value)}/>
                <Input placeholder='Username' style={styles.input} value={this.state.username} onChangeText={value=>this.handleInputChange('username',value)}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={value=>this.handleInputChange('password',value)}/>
                {this.state.loading ? <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 40}}/>  :
                <View style={styles.button} >
                <Button title="Register" onPress={this.handleButtonRegister}/>
                </View>}
                {this.state.error ? <Text>Something went wrong or account already exsist!</Text> : null}
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
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
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
        onLogged: (token)=>dispatch(actions.loggedInto(token))
    };
};
  
export default connect(null,mapDispatchToProps)(Register);