import React from 'react';

import {View,Text,ActivityIndicator,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import {URL} from '../../public/url';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class BMICalculator extends React.Component {
    state={
        Height: 0,
        Weight: 0,
        BMI: 0,
        error: false,
        loading: false
    };

    componentDidMount(){
        this.setState({loading: true});
        axios.get(URL+'/me',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"    
        }})
        .then(({data})=>{
            this.setState({
                Height: data.height,
                Weight: data.weight,
                BMI: data.BMI,
                loading: false
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    inputHandler = (parameter,input) =>{
        let newText = '';
        let numbers = '0123456789';
        for (var i=0; i < input.length; i++) {
            if(numbers.indexOf(input[i]) > -1 ) {
                newText = newText + input[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        this.setState({[parameter]: input},()=>{
            this.calculateBMI();
        });
    }

    saveButtonHandler = ()=>{
        axios.put(URL+'/me',{
            ...this.state
        },{headers:{
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.props.onUpdate();
            this.props.navigation.goBack();
        })
        .catch(err=>{
            this.setState({error: true});
            console.log(err);
        })
    }

    iconPressHandler = ()=>{
        this.props.navigation.navigate('BMIInfo');
    }

    calculateBMI = () =>{
        const heightMeters = this.state.Height/100;
        const BMI = this.state.Weight/(heightMeters*heightMeters);
        this.setState({BMI: BMI.toFixed(2)});
    }

    render(){
        return (
            <>
            <Icon onPress={this.iconPressHandler} name="help" size={40} color={"black"} style={{position:'absolute',right: 30,top: 10}}/>
            <View style={styles.container}>
                <View style={styles.input}>
                    <Input maxLength={3} value={this.state.Height.toString()} onChangeText={(text)=>this.inputHandler('Height',text)} placeholder="Height cm"/>
                    <Input maxLength={3} value={this.state.Weight.toString()} onChangeText={(text)=>this.inputHandler('Weight',text)} placeholder="Weight kg"/>
                </View>
                <Text style={styles.textBMI}>BMI: {isNaN(this.state.BMI) ? 0 : this.state.BMI}</Text>
                <View style={styles.button}>
                    <Button onPress={this.saveButtonHandler} title="Save"/>
                </View>
                <Text style={{marginTop: 10}}>{this.state.error ? "Wrong Height or Width" : null}</Text>
                {this.state.loading ? <ActivityIndicator size="large" color="#0000ff"/> : null}
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '20%'
    },
    input: {
        width: '50%'
    },
    textBMI: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: '30%',
        marginTop: '5%'
    }
})

const mapStateToProps = state =>{
    return {
        token: state.token
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onUpdate: ()=>dispatch(actions.onUpdateComponent())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BMICalculator);