import React from 'react';

import {Text} from 'react-native';

class Calories extends React.Component {
    componentDidMount(){
        console.log(this.props.logged,this.props.token);
    }

    render(){
        return(
            <Text>Calories</Text>
        )
    }
};

/*const mapStateToProps = state => {
    return {
        logged: state.logged,
        token: state.token
    }
};
connect(mapStateToProps) działa*/
export default Calories;