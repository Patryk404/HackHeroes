import React from 'react';
import {Text,StyleSheet,View} from 'react-native'; 
import {Button,Input} from 'react-native-elements';
import PercentageCircle from 'react-native-percentage-circle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Calories extends React.Component {
    state={
        fill: false,
        caloriesIntake: 0,
        caloriesGet: 0,
        products: [],
        amountInput: ''
    }

    componentDidMount(){
        this.update();
    }
    
    componentDidUpdate(){
        if(this.props.update){
            this.update();
            this.props.offUpdate();
        }
    }

    update=()=>{
        axios.get(URL+'/calories',{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.setState({caloriesGet: response.data.calories,caloriesIntake: response.data.calories_range,amountInput: response.data.calories_range.toString()});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    buttonLogOutHandler=()=>{
        this.props.logOut();
        this.props.navigation.navigate('Login');
    };  

    buttonProductsHandler=()=>{
        this.props.navigation.navigate('Products');
    };

    buttonHistoryOfCaloriesHandler = ()=>{
        this.props.navigation.navigate('CaloriesHistory'); 
    }; 

    inputAmountHandler= (input)=>{
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
        this.setState({amountInput: input});
    };

    setNewCalorieIntake=()=>{
        axios.patch(URL+'/calories/intake',{
            intake: parseInt(this.state.amountInput)
        },{
            headers:{
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.update();
        })
        .catch(err=>{
            console.log(err);
        })
    };

    render(){
        return(
            <View style={styles.container}>
                <Icon onPress={this.update} name="autorenew" size={40} color={"black"} style={{position:'absolute',right: 30,top: 30}}/>
                <View style={{position:'absolute',left: 30,top: 30}}>
                    <Button onPress={this.buttonLogOutHandler} title="Log Out"/>
                </View>
                <View style={{marginTop: 30}}>
                    <PercentageCircle radius={100} percent={this.state.caloriesIntake-1 >= this.state.caloriesGet ? this.state.caloriesGet/this.state.caloriesIntake * 100 : 100} color={this.state.caloriesIntake-1>= this.state.caloriesGet?"red" : "green"}>   
                        <Text style={{fontSize: 20,color: this.state.caloriesIntake-1 >= this.state.caloriesGet?"red" : "green"}}>          
                        {this.state.caloriesGet}/{this.state.caloriesIntake}kcal
                        </Text>   
                        <Text style={{marginTop: 10}}>
                        {this.state.caloriesIntake-1>= this.state.caloriesGet? <Text style={styles.emoji}>😕</Text> : <Text style={styles.emoji}>😃</Text>}
                        </Text>
                    </PercentageCircle>
                </View>
                <Text style={{fontSize: 20,textAlign: 'center',marginTop: 30}}>Calorie intake:</Text>
                <View style={styles.containerAmount}>
                    <Input maxLength={5} value={this.state.amountInput} onChangeText={(input)=>this.inputAmountHandler(input)}/>
                    <Icon name="check-circle" size={30} color={"#4C8BF5"} onPress={this.setNewCalorieIntake}/>
                </View>
                <View style={styles.button}>
                    <Button onPress={this.buttonProductsHandler} title="Products"/>
                </View>  
                <View style={styles.button}>
                    <Button onPress={this.buttonHistoryOfCaloriesHandler} title="History of Calories"/>
                </View> 
            </View>
        )
    }
};

const mapStateToProps = state => {
    return {
        logged: state.logged,
        token: state.token,
        update: state.update
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        offUpdate: ()=>dispatch(actions.offUpdateComponent()),
        logOut: ()=>dispatch(actions.logOut())
    };
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30
    },
    emoji: {
        fontSize: 30,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerAmount: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Calories);