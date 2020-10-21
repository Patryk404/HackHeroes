import React from 'react'
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native';
import {Button,Input} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown-v2';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

import axios from 'axios';
import {URL} from '../../public/url';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        gender: 'Male',
        loading: false,
        error: undefined,
    };

    handleInputChange =(name,value)=>{
        this.setState({
        [name]: value
        });
    };

    handleDropdownChange = (gender)=>{
        this.setState({gender: gender});
    }

    handleButtonRegister=()=>{
        this.setState({loading: true});
        axios.post(URL+'/auth/signup',{
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            gender: this.state.gender
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
                <Text style={styles.text}>Make an account😀</Text>
                <Input placeholder="Email" style={styles.input} value={this.state.email} onChangeText={value=>this.handleInputChange('email',value)}/>
                <Input placeholder='Username' style={styles.input} value={this.state.username} onChangeText={value=>this.handleInputChange('username',value)}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={value=>this.handleInputChange('password',value)}/>
                <View style={styles.dropdown}>
                    <Dropdown label="Gender" data={[{value: 'Male'},{value: 'Female'}]} value={this.state.gender} onChangeText={(gender)=>{this.handleDropdownChange(gender)}}/>
                </View>
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
    },
    dropdown: {
        width: '30%'
    }
  });

const mapDispatchToProps = dispatch =>{
    return {
        onLogged: (token)=>dispatch(actions.loggedInto(token))
    };
};
  
export default connect(null,mapDispatchToProps)(Register);