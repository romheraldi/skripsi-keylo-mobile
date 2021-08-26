import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export class Home extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.root}>
                    <View style={styles.profile}>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1,
        paddingRight: wp(10),
        paddingLeft: wp(10),
        paddingTop: hp(5),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
