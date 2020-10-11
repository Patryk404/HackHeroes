import React from 'react';
import {SafeAreaView,ScrollView,Text,StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import axios from 'axios';
import {URL} from '../../../public/url'; 

import Product from './Product';

class ProductList extends React.Component {
    state = {
        products: []
    }
    componentDidMount() {
        axios.get(URL+'/calories/food',{
            headers:{
                "Authorization": "Bearer "+ props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                products: response.data.food
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <>
                <Text style={styles.mainText}>Products:</Text>
                <SafeAreaView style={styles.container}>
                <ScrollView>
                    {this.state.products.map(product=>{
                        return(
                            <Product key={product._id} _id={product._id} title={product.title} calories={product.calories}/>
                        );
                    })}
                </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '40%',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#4C8BF5',
        borderRadius: 10,
        alignItems: 'center'
    }, 
    mainText: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 30
    }
});

const mapStateToProps = state =>{
    return {
        token: state.token
    }
};

export default connect(mapStateToProps)(ProductList);