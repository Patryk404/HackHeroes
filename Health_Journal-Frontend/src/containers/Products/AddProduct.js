import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';

import axios from 'axios';
import {URL} from '../../public/url';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class AddProduct extends React.Component{
    state = {
        title: '',
        calories: ''
    };

    onChangedCalories=(text)=>{
        let newText = '';
        let numbers = '0123456789';
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        this.setState({ calories: newText });
    }

    onChangedTitle=(text)=>{
        this.setState({title: text});
    }

    addButtonHandler = ()=>{
        axios.post(URL+'/calories/food',{
            title: this.state.title,
            calories: parseInt(this.state.calories)
        },{
            headers:{
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{ 
            this.props.onUpdate();
            this.props.navigation.goBack();
        })
        .catch(err=>{
            console.log(err);
        })
    };

    render(){
        return(
            <View>
                <Input style={{marginTop: 100}} placeholder="Title" onChangeText={(text)=>this.onChangedTitle(text)}/>
                <Input placeholder="Calories" maxLength={5} onChangeText={(text)=>this.onChangedCalories(text)}/>
                <View style={styles.button}>
                <Button onPress={this.addButtonHandler} title="Add"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width: '80%',
        alignSelf: 'center'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: ()=>dispatch(actions.onUpdateComponent())
    }
};  

const mapStateToProps = state=>{
    return {
        token: state.token
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);