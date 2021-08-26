import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";

export class LoggedIn extends Component {
    render() {
        return (
            <View>
                <Text>Hai</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)
