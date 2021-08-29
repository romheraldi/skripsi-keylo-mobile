import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function mapStateToProps(state) {
    return {};
}

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        };
    }

    onChangeHandler = (name) => {
        return (text) => {
            this.setState({[name]: text});
        };
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.root}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => this.props.navigation.goBack()}/>
                    <View style={styles.textSection}>
                        <Text style={styles.bigText}>
                            Ubah Profil
                        </Text>
                    </View>
                    <View style={styles.formSection}>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Kata Sandi Lama
                            </Text>
                            <TextInput
                                style={styles.formInput}
                                maxLength={40}
                                placeholder="Kata sandi lama"
                                clearButtonMode="while-editing"
                                onChangeText={this.onChangeHandler("oldPassword")}
                                value={this.state.oldPassword}
                                secureTextEntry={true}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Kata Sandi Baru
                            </Text>
                            <TextInput
                                style={styles.formInput}
                                maxLength={40}
                                placeholder="Masukan kata sandi"
                                clearButtonMode="while-editing"
                                onChangeText={this.onChangeHandler("newPassword")}
                                value={this.state.newPassword}
                                secureTextEntry={true}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Konfirmasi Kata Sandi
                            </Text>
                            <TextInput
                                style={styles.formInput}
                                maxLength={40}
                                placeholder="Konfirmasi kata sandi"
                                clearButtonMode="while-editing"
                                onChangeText={this.onChangeHandler("confirmNewPassword")}
                                value={this.state.confirmNewPassword}
                                secureTextEntry={true}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={{marginTop: wp(2)}}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate("ForgotPassword")}
                            >
                                <Text style={styles.buttonText}>Ubah Kata Sandi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1,
        paddingRight: wp(10),
        paddingLeft: wp(10),
        paddingTop: hp(5),
    },
    textSection: {
        marginTop: wp(10)
    },
    bigText: {
        fontSize: wp(5),
        fontFamily: "PoppinsSemiBold",
        color: "#282C2F",
    },
    smallText: {
        fontSize: wp(4),
        fontFamily: "PoppinsRegular",
        color: "#BDBDBD",
    },
    formSection: {
        marginTop: wp(3)
    },
    formGroup: {
        marginBottom: hp(3)
    },
    formLabel: {
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(4),
    },
    formInput: {
        fontFamily: "PoppinsRegular",
        fontSize: wp(3),
        borderWidth: wp(0.3),
        width: '100%',
        paddingTop: hp(1),
        paddingBottom: hp(1),
        paddingLeft: wp(3),
        paddingRight: wp(3),
        borderRadius: wp(1),
        borderColor: "#0f4471",
        color: "#0f4471",
        marginTop: wp(2),
    },
    forgotPassword: {
        fontFamily: "PoppinsRegular",
        fontSize: wp(3),
    },
    linkForgotPassword: {
        color: '#31C4A0',
    },
    button: {
        backgroundColor: "#282C2F",
        width: '100%',
        paddingVertical: hp(1),
        alignItems: 'center',
        borderRadius: wp(2),
        marginBottom: hp(2)
    },
    buttonSecondary: {
        backgroundColor: "#FFF",
        width: '100%',
        paddingVertical: hp(1),
        alignItems: 'center',
        borderRadius: wp(2),
        marginBottom: hp(2),
        borderWidth: wp(0.5),
        borderColor: "#31C4A0"
    },
    buttonText: {
        color: '#31C4A0',
        fontFamily: "PoppinsSemiBold",
    }
})

export default connect(
    mapStateToProps,
)(ChangePassword);