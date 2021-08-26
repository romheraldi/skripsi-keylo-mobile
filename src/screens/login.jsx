import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { AsyncStorage } from 'react-native';

function mapStateToProps(state) {
    return {};
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    onChangeHandler = (name) => {
        return (text) => {
          this.setState({ [name]: text });
        };
      };
    
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.root}>
                    <Image
                        source={require("../images/logo.png")}
                        resizeMode={"contain"}
                        style={{ width: wp(25)}}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.bigText}>
                            Masuk Akun
                        </Text>
                        <Text style={styles.smallText}>
                            Dapatkan kuncimu!
                        </Text>
                    </View>
                    <View style={styles.formSection}>
                        <View>
                            <Text style={styles.formLabel}>
                                Email
                            </Text>
                            <TextInput
                                style={styles.formInput}
                                maxLength={40}
                                placeholder="email@aktif.com"
                                clearButtonMode="while-editing"
                                onChangeText={this.onChangeHandler("email")}
                                value={this.state.email}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={{marginTop: wp(5)}}>
                            <Text style={styles.formLabel}>
                                Kata Sandi
                            </Text>
                            <TextInput
                                style={styles.formInput}
                                maxLength={40}
                                placeholder="Kata Sandi"
                                clearButtonMode="while-editing"
                                onChangeText={this.onChangeHandler("password")}
                                value={this.state.password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={{marginTop: wp(5)}}>
                            <Text style={styles.forgotPassword}>
                                Lupa kata sandi?
                                <Text 
                                    style={styles.linkForgotPassword}
                                    onPress={async() => await this.props.navigation.navigate("ForgotPassword")}>
                                    {" "}Atur ulang.
                                </Text>
                            </Text>
                        </View>
                        <View style={{marginTop: wp(5)}}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => AsyncStorage.setItem("LOGIN_TOKEN", "ALDI")}
                            >
                                <Text style={styles.buttonText}>Masuk Akun</Text>
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
        paddingTop: hp(20),
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
        marginTop: wp(5)
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
        borderRadius: 4
    },
    buttonText: {
        color: '#31C4A0',
        fontFamily: "PoppinsSemiBold",
    }
})

export default connect(
    mapStateToProps,
)(Login);