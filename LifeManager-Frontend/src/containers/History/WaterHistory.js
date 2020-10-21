import React from 'react';
import {View,SafeAreaView,ScrollView,ActivityIndicator,Text,StyleSheet} from 'react-native';

import axios from 'axios';
import {URL} from '../../public/url';

import {connect} from 'react-redux';

class WaterHistory extends React.Component{
    state={
        history: [],
        loading: false
    };
    componentDidMount(){
        this.setState({loading: true});
        axios.get(URL+'/water/history',{
            headers:{
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({history: response.data.history,loading: false});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    {this.state.history.map(tile=>{
                        return(
                            <View key={tile._id} style={styles.containerTile}>
                                <Text style={{...styles.textTile,fontWeight: 'bold'}}>{tile.date.split('T')[0].replace('-','.').replace('-','.')}</Text>
                                <Text style={styles.textTile}>{tile.cups} Cups🥤</Text>
                            </View>
                        );
                    })}
                    {this.state.loading ? <ActivityIndicator style={{marginTop: '60%'}} size="large" color="#0000ff"/> : null }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    }, 
    containerTile:{
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: 100,
        alignSelf: 'center',
        backgroundColor: '#fafafa'
    },
    textTile:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    }
});

const mapStateToProps = state=>{
    return{
        token: state.token
    }
}

export default connect(mapStateToProps)(WaterHistory);