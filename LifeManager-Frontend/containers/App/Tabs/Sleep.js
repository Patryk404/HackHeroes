import React from 'react';

import {Text,Image,View,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Average from '../../../components/Average/Average';

class Sleep extends React.Component{
    state = {
        sleep: false
    }
    sleepButtonHandler =()=>{
        this.setState({sleep: !this.state.sleep});
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={this.state.sleep ? require('../../../public/images/moon.png') : require('../../../public/images/sun.png')}/>
                <View style={styles.button}>
                <Button onPress={this.sleepButtonHandler} title={this.state.sleep ? "Stop Sleep" : "Sleep"}/>
                </View>
                <View style={styles.button}>
                    <Button title="History of Sleep"/>
                </View>
                <Average/>
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
    image: {
        marginTop: 30,
        width: 200,
        height: 200
    }
});

export default Sleep;