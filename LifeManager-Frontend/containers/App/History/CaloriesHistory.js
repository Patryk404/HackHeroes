import React from 'react';
import {SafeAreaView,View,Text,ScrollView,StyleSheet} from 'react-native';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class CaloriesHistory extends React.Component {
    state={
        history: []
    }

    componentDidMount(){
        axios.get(URL+'/calories/history',{
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
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                {
                    this.state.history.map(calories=>{
                        return(
                        <View style={styles.containerHistory} key={calories._id}>
                            <Text style={{...styles.textTile,fontWeight: 'bold'}}>{calories.date.split('T')[0].replace('-','.').replace('-','.')}</Text>
                            <Text style={styles.textTile}>{calories.calories}/{calories.calories_range}kcal {calories.meet ? <Text>😀</Text> : <Text>😔</Text>}</Text>
                        </View>
                        );
                    })
                }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

const styles = StyleSheet.create({
    container: {
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
    textTile: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    }
});

export default connect(mapStateToProps)(CaloriesHistory);