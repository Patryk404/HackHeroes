import React from 'react';
import {Text,StyleSheet,View} from 'react-native'; 
import {Button} from 'react-native-elements';
import PercentageCircle from 'react-native-percentage-circle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class Calories extends React.Component {
    state={
        fill: false,
        calories: 0,
        caloriesGet: 0,
        products: []
    }

    componentDidMount(){
        this.update();
    }

    update=()=>{
        axios.get(URL+'/calories',{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.setState({caloriesGet: response.data.calories,calories: response.data.calories_range});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    buttonProductsHandler=()=>{
        this.props.navigation.navigate('Products');
    };

    render(){
        return(
            <View style={styles.container}>
                <Icon onPress={this.update} name="autorenew" size={40} color={"black"} style={{alignSelf: 'center'}}/>
                <View style={{marginTop: 30}}>
                    <PercentageCircle radius={100} percent={this.state.caloriesGet/this.state.calories * 100} color={"#3498db"}>   
                        <Text style={{fontSize: 20}}>          
                        {this.state.caloriesGet}/{this.state.calories}kcal
                        {this.state.fill ? <Text>😃</Text>:<Text>😕</Text>}
                        </Text>   
                    </PercentageCircle>
                </View>
                <View style={styles.button}>
                    <Button onPress={this.buttonProductsHandler} title="Products"/>
                </View>  
                <View style={styles.button}>
                    <Button title="History of Calories"/>
                </View> 
            </View>
        )
    }
};

const mapStateToProps = state => {
    return {
        logged: state.logged,
        token: state.token
    }
};

const styles = StyleSheet.create({
    button: {
        marginTop: 30
    },
    calories_red: {
        fontSize: 40,
        marginTop: 100,
        color: 'red'
    },
    calories_green:{
        fontSize: 40,
        marginTop: 100,
        color: 'green'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default connect(mapStateToProps)(Calories);