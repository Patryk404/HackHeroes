import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

const BMIInfo = (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{"<16"} starvation</Text>
            <Text style={styles.text}>16-16.99 emaciation</Text>
            <Text style={styles.text}>17-18.49 underweight</Text>
            <Text style={styles.text}>18.5-24.99 optimum</Text>
            <Text style={styles.text}>25-29.99 overweight</Text>
            <Text style={styles.text}>30-34.99 obesity grade 1</Text>
            <Text style={styles.text}>35-39.99 obesity grade 2</Text>
            <Text style={styles.text}>{">40"} obesity grade 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    text:{
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default BMIInfo;