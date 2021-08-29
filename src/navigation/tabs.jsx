import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/home'
import History from "../screens/history";
import SettingNavigator from "../screens/settingNavigator";

export default class Tabs extends Component {
  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#31C4A0"
        inactiveColor="#fff"
        labeled={false}
        barStyle={{
          backgroundColor: '#282C2F',
          // position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={25} color={color} />
            ),
          }} />
        <Tab.Screen name="History" component={History}
          options={{
            tabBarLabel: 'Riwayat',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="settings-backup-restore" size={25} color={color} />
            ),
          }} />
          <Tab.Screen name="Profile" component={SettingNavigator}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="settings" size={25} color={color} />
            ),
          }} />
      </Tab.Navigator>
    )
  }
}
