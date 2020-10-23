import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import {Text,SafeAreaView,ScrollView,View,ActivityIndicator,StyleSheet} from 'react-native'; 
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import {URL} from '../../public/url';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Profile extends React.Component {
    state ={
        me: {
            gender: 'Male',
            hours: 0,
            minutes: 0,
            calorie: 0,
            water: 0,
            height: 0,
            weight: 0,
            BMI: 0            
        },
        loading: false
    };

    componentDidMount(){
        this.update();
    };

    componentDidUpdate(){
        if(this.props.update){
            this.update();
            this.props.offUpdate();
        }
    }

    update=()=>{ 
        this.setState({loading: true});
        axios.get(URL+'/me',{
            headers:{
                "Authorization": "Bearer "+ this.props.token ,
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            this.setState({
                me: {
                    ...response.data
                },
                loading: false
            });
        })
        .catch(err=>{ 
            console.log(err);
        })
    }

    buttonLogOutHandler=()=>{
        this.props.logOut();
        this.props.navigation.navigate('Login');
    };  

    buttonBMIHandler = ()=>{
        this.props.navigation.navigate('BMICalculator');
    }

    iconPressHandler = ()=>{
        this.props.navigation.navigate('BMIInfo');
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {this.state.loading ? <ActivityIndicator style={styles.spinner} size="large" color="#0000ff"/> : null }
                    <Icon onPress={this.iconPressHandler} name="help" size={40} color={"black"} style={{position:'absolute',right: 30,top: 30}}/>
                    <Icon onPress={this.update} name="autorenew" size={40} color={"black"} style={{position:'absolute',right: 30,top: 80}}/>
                    <View style={styles.buttonLogOut}>
                        <Button onPress={this.buttonLogOutHandler} title="Log Out"/>
                    </View>
                    <Text style={styles.emoji}>{this.state.me.gender=='Male' ?  "👨" :"👩" }</Text>
                    <AboutMe me={this.state.me}/>
                    <View style={styles.buttonBMI}>
                        <Button onPress={this.buttonBMIHandler} title="BMI Calculator"/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        height: '100%'
    },
    emoji: {
        marginTop: 20,
        fontSize: 75,
        alignSelf: 'center'
    },
    spinner: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    buttonLogOut: {
        width: '20%',
        position: 'absolute',
        top: '5%',
        left: '5%'
    },
    buttonBMI: {
        width: '50%',
        alignSelf: 'center',
        marginTop: '10%'
    }
});

const mapStateToProps = state => {
    return {
        token: state.token,
        update: state.update
    }
};

const mapDispatchToProps = dispatch=>{
    return {
        logOut: ()=>dispatch(actions.logOut()),
        offUpdate: ()=>dispatch(actions.offUpdateComponent())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);