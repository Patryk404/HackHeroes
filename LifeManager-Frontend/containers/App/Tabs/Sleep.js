import React from 'react';

import {Text,Image,View,StyleSheet,Linking} from 'react-native';
import {Button} from 'react-native-elements';
import Average from '../../../components/Average/Average';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class Sleep extends React.Component{
    state = {
        sleep: false,
        hours: 0,
        minutes: 0,
        averageHours: 0,
        averageMinutes: 0
    }

    componentDidMount(){
        this.getSleep();
        this.getAverage();
    }

    getSleep = ()=>{
        axios.get(URL+'/sleep',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                sleep: response.data.sleep
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getAverage = () =>{
        axios.get(URL+'/sleep/average',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                averageHours: response.data.hours,
                averageMinutes: response.data.minutes
            });
        })
        .catch(err=>{
            console.log(err);
        })
    };

    historyOfSleepButtonHandler = ()=>{
        this.props.navigation.navigate('SleepHistory');
    };

    sleepButtonHandler =()=>{
        if (this.state.sleep){
            axios.put(URL+'/sleep/wakeup',{},{
                headers: {
                    "Authorization": "Bearer "+this.props.token,
                    "Content-Type": "application/json"
                }
            })
            .then(response=>{
                this.setState({hours: response.data.hours,minutes: response.data.minutes});
                this.getSleep();
                this.getAverage();
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            axios.put(URL+'/sleep/gotosleep',{},{
                headers: {
                    "Authorization": "Bearer "+this.props.token,
                    "Content-Type": "application/json"
                }
            }) 
            .then(response=>{
                this.getSleep();
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={this.state.sleep ? require('../../../public/images/moon.png') : require('../../../public/images/sun.png')}/>
                {
                    (this.state.hours || this.state.minutes) ? <Text style={styles.text}>You slept {this.state.hours} hours and {this.state.minutes} minutes</Text> : null
                }
                <View style={styles.button}>
                <Button onPress={this.sleepButtonHandler} title={this.state.sleep ? "Stop Sleep" : "Sleep"}/>
                </View>
                <View style={styles.button}>
                    <Button onPress={this.historyOfSleepButtonHandler} title="History of Sleep"/>
                </View>
                <Average sleep averageHours={this.state.averageHours} averageMinutes={this.state.averageMinutes}/>
            <View style={{flexDirection: 'row',marginTop: 30}}>
                <Text>Icons made by </Text> 
                <Text onPress={()=> Linking.openURL("https://www.flaticon.com/authors/darius-dan")} style={{textDecorationLine: 'underline',color: 'blue'}} title="Darius Dan">Darius Dan</Text> 
                <Text> from </Text> 
                <Text onPress={()=>Linking.openURL("https://www.flaticon.com/")}  style={{textDecorationLine: 'underline',color: 'blue'}} title="Flaticon">www.flaticon.com</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop: 10}}>
                <Text>Icons made by </Text> 
                <Text onPress={()=> Linking.openURL("https://www.flaticon.com/authors/catkuro")} style={{textDecorationLine: 'underline',color: 'blue'}} title="catkuro">catkuro</Text> 
                <Text> from </Text> 
                <Text onPress={()=>Linking.openURL("https://www.flaticon.com/")}  style={{textDecorationLine: 'underline',color: 'blue'}} title="Flaticon">www.flaticon.com</Text>
            </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    button:{
        marginTop: 30,
        width: 200
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    image: {
        marginTop: 30,
        width: 200,
        height: 200
    }
});

export default connect(mapStateToProps)(Sleep);