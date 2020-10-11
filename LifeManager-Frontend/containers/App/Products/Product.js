import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Product = (props)=>{
    const buttonHandler = ()=>{
        console.log(props._id);
    }
    return (
    <View style={styles.productContainer}>
    <Text style={styles.productText}>{props.title}</Text>
    <Text style={styles.productText}>{props.calories}kcal</Text>
    <View style={styles.productButton}>
    <Button onPress={buttonHandler} title="Eat"/>
    </View>
    <Icon style={styles.productTrash} name="delete" size={25} color='black'/>
    </View>
    );
}

const styles = StyleSheet.create({
    productContainer:{
        marginTop: 30,
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbdefb',
        backgroundColor: '#fafafa',
        width: '100%'
    },
    productText:{
        margin: 10,
        fontSize: 20
    },
    productButton:{
        margin: 10,
        width: '20%'
    },
    productTrash:{
        marginLeft: 10,
        color: '#4C8BF5'
    },
}); 


export default Product;