import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from '@expo/vector-icons';

export class Home extends Component {
    constructor() {
        super();

        this.state = {
            category: '1'
        }
    }
    render() {
        const DATA = [
            {
                id: '1',
                title: 'First Item',
            },
            {
                id: '2',
                title: 'Second Item',
            },
            {
                id: '3',
                title: 'Third Item',
            },
            {
                id: '4',
                title: 'Third Item',
            },
            {
                id: '5',
                title: 'Third Item',
            },
        ];
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.root}>
                    <View style={styles.profileSection}>
                        <Image
                            source={require("../images/28.jpg")}
                            resizeMode={"contain"}
                            style={styles.profileImage}
                        />
                        <View>
                            <Text style={styles.bigName}>Hi Aldi!</Text>
                            <Text style={styles.smallDate}>Kamis, 22 Januari 2021</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                DATA.map((category, i) =>
                                    <View key={i} style={{
                                        marginLeft: wp(10),
                                        marginRight: i+1 == DATA.length ? wp(10) : 0}}
                                    >
                                        <Text style={{
                                            ...styles.categoryItem,
                                            fontFamily: category.id === this.state.category ? 'PoppinsSemiBold' : "PoppinsRegular",
                                            color: category.id === this.state.category ? "#31C4A0" : "#666666"
                                        }}
                                              onPress={()=> {
                                                  this.setState({category: category.id})
                                              }}
                                        >{category.title}</Text>
                                    </View>
                                )
                            }
                        </ScrollView>
                        <View style={styles.deviceList}>
                            <TouchableOpacity style={styles.deviceListItem}>
                                <View style={styles.iconBox}>
                                    <MaterialIcons name="lock-outline" size={hp(3)} color="#666666" />
                                </View>
                                <Text style={styles.deviceListItemText}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deviceListItemActive}>
                                <View style={styles.iconBoxActive}>
                                    <MaterialIcons name="lock-open" size={hp(3)} color="#FFF" />
                                </View>
                                <Text style={styles.deviceListItemTextActive}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deviceListItem}>
                                <View style={styles.iconBox}>
                                    <MaterialIcons name="lock-outline" size={hp(3)} color="#666666" />
                                </View>
                                <Text style={styles.deviceListItemText}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deviceListItem}>
                                <View style={styles.iconBox}>
                                    <MaterialIcons name="lock-outline" size={hp(3)} color="#666666" />
                                </View>
                                <Text style={styles.deviceListItemText}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deviceListItem}>
                                <View style={styles.iconBox}>
                                    <MaterialIcons name="lock-outline" size={hp(3)} color="#666666" />
                                </View>
                                <Text style={styles.deviceListItemText}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deviceListItem}>
                                <View style={styles.iconBox}>
                                    <MaterialIcons name="lock-outline" size={hp(3)} color="#666666" />
                                </View>
                                <Text style={styles.deviceListItemText}>Ruang Serba Guna</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    profileSection: {
        paddingLeft: wp(10),
        paddingRight: wp(10),
        paddingTop: hp(5),
        paddingBottom: hp(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        borderRadius: wp(100),
        width: 75,
        marginRight: wp(3)
    },
    bigName: {
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(5),
        color: "#31C4A0"
    },
    smallDate: {
        fontFamily: "PoppinsRegular",
        fontSize: wp(3),
        color: "#E4E4E4"
    },
    categoryItem: {
        fontFamily: "PoppinsRegular",
        fontSize: wp(4),
        color: "#666666"
    },
    deviceList: {
        paddingLeft: wp(10),
        paddingRight: wp(10),
        marginTop: hp(2),
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: 'wrap',
        flex: 1,
    },
    deviceListItem: {
        width: wp(39),
        height: wp(39),
        backgroundColor: '#F2F2F2',
        padding: wp(3),
        borderRadius: 20,
        borderWidth: wp(0.5),
        borderColor: "#BDBDBD",
        marginVertical: hp(0.7),
    },
    deviceListItemActive: {
        width: wp(39),
        height: wp(39),
        backgroundColor: '#282C2F',
        padding: wp(3),
        borderRadius: 20,
        marginVertical: hp(0.7),
    },
    deviceListItemText: {
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(4),
        color: "#666666"
    },
    deviceListItemTextActive: {
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(4),
        color: "#fff"
    },
    iconBox: {
        justifyContent:'center',
        alignItems: 'center',
        height: hp(6),
        width: wp(10),
        borderColor: "#BDBDBD",
        borderWidth: wp(0.5),
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        marginBottom: hp(2),
    },
    iconBoxActive: {
        justifyContent:'center',
        alignItems: 'center',
        height: hp(6),
        width: wp(10),
        borderColor: "#FFF",
        borderWidth: wp(0.5),
        borderRadius: 10,
        backgroundColor: "#666666",
        marginBottom: hp(2),
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
