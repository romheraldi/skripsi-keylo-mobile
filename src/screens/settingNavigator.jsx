import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    StyleSheet
} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Setting from "./setting";
import ChangeProfile from './changeProfile';
import ChangePassword from './changePassword';

export class SettingNavigator extends Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator
                initialRouteName="Setting"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen name="Setting" component={Setting}/>
                <Stack.Screen name="ChangeProfile" component={ChangeProfile}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            </Stack.Navigator>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1,
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingNavigator)
