import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import {Text,SafeAreaView,ScrollView,View,ActivityIndicator,StyleSheet} from 'react-native'; 

import axios from 'axios';
import {URL} from '../../public/url';

import {connect} from 'react-redux';

class Profile extends React.Component {
    state ={
        gender: 'Male',
        me: {
            hours: 0,
            minutes: 0,
            calorie: 0,
            water: 0
        }
    };

    componentDidMount(){
        axios.get(URL+'/me/average',{
            headers:{
                "Authorization": "Bearer "+ this.props.token ,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                me: {...response.data}
            });
        })
        .catch(err=>{ 
            console.log(err);
        })
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.emoji}>{this.state.gender==='Male' ? "👨" : "👩"}</Text>
                    <AboutMe me={this.state.me}/>
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
    }
});

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

export default connect(mapStateToProps)(Profile);