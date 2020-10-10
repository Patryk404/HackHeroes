import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {Button,Input} from 'react-native-elements';
class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: ''
    };

    handleInputChange =(name,value)=>{
        this.setState({
        [name]: value
        });
    };

    handleButtonRegister=()=>{
        console.log(this.state);
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Make account😀</Text>
                <Input placeholder="Email" style={styles.input} value={this.state.email} onChangeText={value=>this.handleInputChange('email',value)}/>
                <Input placeholder='Username' style={styles.input} value={this.state.username} onChangeText={value=>this.handleInputChange('username',value)}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={value=>this.handleInputChange('password',value)}/>
                <View style={styles.button} >
                <Button title="Register" onPress={this.handleButtonRegister}/>
                </View>
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
        marginTop: 100,
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
  
export default Register;