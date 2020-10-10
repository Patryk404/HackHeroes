import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

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
    render(){
        return(
            <View style={styles.container}>
                <Text style={this.state.fill ? styles.calories_green : styles.calories_red}>
                {this.state.caloriesGet}/{this.state.calories}kcal
                {this.state.fill ? <Text>😃</Text> :<Text>😕</Text>}
                </Text>
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
    emoji: {

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
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default connect(mapStateToProps)(Calories);