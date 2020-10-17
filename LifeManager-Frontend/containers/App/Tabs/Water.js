import React from 'react';

import {View,Image,StyleSheet,Text,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Average from '../../../components/Average/Average';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class Water extends React.Component{
    state = {
        cups: 0,
        average: 0
    }

    componentDidMount(){
        this.update();
    }
    update = () =>{
        axios.get(URL+'/water',{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.setState({
                cups: response.data.cups
            });
            this.getAverage();
        })
        .catch(err=>{
            console.log(err);
        })
    };

    getAverage = ()=>{
        axios.get(URL+'/water/average',{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.setState({average: response.data.average});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    plusCupOfWater = ()=>{
        axios.put(URL + '/water/plus',{},{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
        .then(response=>{
            this.update();
        })
        .catch(err=>{
            console.log(err);
        })
    };

    minusCupOfWater = () =>{
        axios.put(URL + '/water/minus',{},{headers: {
            "Authorization": "Bearer "+this.props.token,
            "Content-Type": "application/json"
        }})
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
            <Image style={styles.image} source={require('../../../public/images/water-glass1.png')}/>
            <Text style={styles.textToday}>Today:</Text>
            <Text style={styles.textCups}>{this.state.cups} Cups</Text>
            <View style={{flexDirection: "row",justifyContent: 'space-around'}}>
                <Icon onPress={this.minusCupOfWater} style={styles.icon}  name="minus"  size={40} color="red"/>
                <Icon onPress={this.plusCupOfWater} style={styles.icon} name="plus" size={40} color="green"/>
            </View>
            <Average average={this.state.average}/>
            <View style={{flexDirection: 'row',marginTop: 30}}>
                <Text>Icons made by </Text> 
                <Text onPress={()=> Linking.openURL("https://www.flaticon.com/authors/pixel-perfect")} style={{textDecorationLine: 'underline',color: 'blue'}} title="Pixel perfect">Pixel perfect</Text> 
                <Text> from </Text> 
                <Text onPress={()=>Linking.openURL("https://www.flaticon.com/")}  style={{textDecorationLine: 'underline',color: 'blue'}} title="Flaticon">www.flaticon.com</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    image: {
        marginTop: 30,
        width: 250,
        height: 250
    },
    textToday: {
        marginTop: 20,
        fontSize: 30
    },
    textCups: {
        marginTop: 10,
        fontSize: 30
    },
    icon: {
        margin: 10
    }
});

const mapStateToProps= state=>{
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(Water);