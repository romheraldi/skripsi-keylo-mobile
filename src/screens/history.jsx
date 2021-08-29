import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RenderOutside = (props) => {
    const view = <View style={{flex: 1, width: '100%'}}/>
    if (!props.onTouch) return view

    return (
        <TouchableWithoutFeedback onPress={props.onTouch} style={{flex: 1, width: '100%'}}>
            {view}
        </TouchableWithoutFeedback>
    )
}
const DetailHistoryModal = (props) => {
    return <Modal animationType={'none'} transparent visible={props.visible}
                  onRequestClose={props.onRequestClose}>
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }}>

            <RenderOutside onTouch={props.onTouchOutside}/>
            <View style={{
                backgroundColor: '#FFFFFF',
                width: '100%',
                borderTopRightRadius: wp(5),
                borderTopLeftRadius: wp(5),
                paddingHorizontal: wp(4),
                maxHeight: hp(50),
            }}>
                <View style={{
                    paddingVertical: hp(3),
                    paddingHorizontal: wp(5)
                }}>
                    <Text style={{
                        color: '#282C2F',
                        fontSize: wp(4),
                        fontFamily: 'PoppinsSemiBold',
                    }}>
                        Rincian
                    </Text>
                    {
                        props.data ? (<View>
                            <Text
                                style={{marginBottom: hp(0.5), marginTop: hp(1)}}>
                                Nama : Ruang Server
                            </Text>
                            <Text style={{marginBottom: hp(0.5), marginTop: hp(1)}}>Akses : Romualdus Aldi
                                Hermanto</Text>
                            <Text style={{marginBottom: hp(0.5), marginTop: hp(1)}}>Tanggal : Kamis, 22 Desember
                                2021</Text>
                            <Text style={{marginBottom: hp(0.5), marginTop: hp(1)}}>Jam : 10:00</Text>
                        </View>) : <Text style={{marginBottom: hp(0.5), marginTop: hp(1)}}>Tidak ada data</Text>
                    }
                </View>
            </View>
        </View>
    </Modal>
}

export class History extends Component {
    constructor() {
        super();

        this.state = {
            modalShow: false
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.root}>
                    <View style={styles.container}>
                        <Text style={styles.headText}>Riwayat</Text>
                        <View style={styles.historyField}>
                            <View style={styles.historyContainer}>
                                <Text
                                    style={styles.historyDate}>
                                    Kamis, 22 Desember 2021
                                </Text>
                                {/* Looping Here */}
                                <TouchableOpacity
                                    style={styles.historyItem}
                                    onPress={() => this.setState({modalShow: true})}>
                                    <Text
                                        numberOfLines={1}
                                        style={{width: wp(30)}}>
                                        Ruang Perkakas Serba Guna
                                    </Text>
                                    <Text
                                        style={styles.historyName}>
                                        Aldi
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <DetailHistoryModal
                    onRequestClose={() => this.setState({modalShow: false})}
                    visible={this.state.modalShow}
                    onTouchOutside={() => this.setState({modalShow: false})}
                />

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
    container: {
        paddingLeft: wp(10),
        paddingRight: wp(10),
        paddingTop: hp(5),
        paddingBottom: hp(2),
    },
    headText: {
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(6),
        color: "#282C2F"
    },
    historyField: {
        marginTop: hp(2)
    },
    historyContainer: {
        marginBottom: hp(2)
    },
    historyDate: {
        color: "#31C4A0",
        fontFamily: "PoppinsSemiBold",
        fontSize: wp(3.5)
    },
    historyItem: {
        marginTop: hp(0.5),
        marginBottom: hp(0.5),
        borderWidth: hp(0.1),
        borderColor: "#282C2F",
        borderRadius: wp(2),
        padding: wp(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    historyName: {
        color: "#BDBDBD"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(History)
