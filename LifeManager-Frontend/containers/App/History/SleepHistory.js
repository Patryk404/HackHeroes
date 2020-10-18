import React from 'react';
import {View,SafeAreaView,ScrollView,Text,StyleSheet} from 'react-native';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class SleepHistory extends React.Component{
    state={
        history: []
    };

    componentDidMount(){
        axios.get(URL+'/sleep/history',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                history: response.data.history
            });
        })
        .catch(err=>{
            console.log(err);
        })
    };

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {
                        this.state.history.map(tile=>{
                            return(
                                <View style={styles.containerHistory} key={tile._id}>
                                    <Text style={styles.textTileTitle}>{tile.date_start.split('T')[0].replace('-','.').replace('-','.')}{tile.date_start.split('T')[0].replace('-','.').replace('-','.') === tile.date_finished.split('T')[0].replace('-','.').replace('-','.') ? null : <Text>-{tile.date_finished.split('T')[0].replace('-','.').replace('-','.')}</Text>}</Text>
                            <Text style={{...styles.textTileTitle, fontWeight: '100',marginTop: 10}}>{tile.sleep_hours} hours {tile.sleep_minutes} minutes</Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
};

const mapStateToProps = state =>{
    return {
        token: state.token
    }
}

const styles = StyleSheet.create({
    container:{ 
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    containerHistory:{
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: 100,
        alignSelf: 'center',
        backgroundColor: '#fafafa'
    },
    textTileTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    }
});

export default connect(mapStateToProps)(SleepHistory);