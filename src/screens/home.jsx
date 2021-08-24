import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from "react-native";

function mapStateToProps(state) {
    return {};
}

class Home extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hai, Welcome to my home!
                </Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);