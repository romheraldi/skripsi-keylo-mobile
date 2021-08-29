import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export class Setting extends Component {
    constructor() {
        super();

        this.state = {
            category: '1'
        }
    }

    render() {
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
                            <Text style={styles.bigName}>Romualdus Aldi Hermanto</Text>
                        </View>
                    </View>
                    <View style={styles.menuSection}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => this.props.navigation.navigate('ChangeProfile')}>
                            <Text style={styles.menuText}>Ubah Profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuText}>Keluar Akun</Text>
                        </TouchableOpacity>
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
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F2F2F2'
    },
    profileImage: {
        borderRadius: wp(100),
        width: 100,
        marginRight: wp(3)
    },
    bigName: {
        textAlign: "center",
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(4),
        marginBottom: hp(2),
        color: "#31C4A0"
    },
    menuSection: {
        paddingVertical: hp(5),
        paddingHorizontal: wp(7),
    },
    menuItem: {
        backgroundColor: "#E0E0E0",
        borderWidth: wp(0.5),
        borderRadius: wp(2),
        borderColor: "#C5C5C5",
        marginBottom: hp(2),
        paddingVertical: hp(2),
        paddingHorizontal: wp(5)
    },
    menuText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: wp(3.5)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
