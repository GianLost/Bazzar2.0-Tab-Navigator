import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const imageProduct1 = require('../images/femaleProduct1.png')
const imageProduct2 = require('../images/femaleProduct2.png')
const imageProduct3 = require('../images/femaleProduct3.png')
const imageProduct4 = require('../images/femaleProduct4.png')
const imageProduct5 = require('../images/femaleProduct5.png')
const imageProduct6 = require('../images/femaleProduct6.png')
const imageProduct7 = require('../images/femaleProduct7.png')
const imageProduct8 = require('../images/femaleProduct8.png')



function WhiteClothe() {
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct1} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Blusa Bazzar Branca Au Revoir</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 80,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> P </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> M </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> G </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> GG </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

function FloweryDress() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct2} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Vestido Bazzar Florido</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 198,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> P </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> M </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> G </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> GG </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function ShoesColorS() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct3} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Tênis Bazzar Color S</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 240,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 35 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 36 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 40 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 41 </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function ShoesPink() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct4} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Tênis Bazzar Pink</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 220,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 35 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 36 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 40 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 41 </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function BlackDress() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct5} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Vestido Bazzar preto longo</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 265,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> P </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> M </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> G </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> GG </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function VintageBag() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct6} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Bolsa Bazzar vintage London</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 415,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Cor: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b2bb91' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d7bf5e' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#c3e6d4' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4a403d' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function RedHotBag() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct7} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Bolsa Bazzar Red Hot</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 280,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Cor: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d1024e' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4a073c' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc3903' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#258a60' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>º</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

function HighHeels() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct8} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Sapato Bazzar salto fasgion</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 155,00</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Tamanhos: </Text>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 35 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 36 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 40 </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 2, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}> 41 </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#151C45', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
};

const style = StyleSheet.create({

    femaleFashion: {

        width: '100%',
        backgroundColor: '#F1BF3E',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    femaleFashionView: {

        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 30,
        padding: 20

    },

    femaleCards: {

        width: '48%',
        marginTop: 20,

    },

    femaleCardButton: {

        alignItems: 'center',
        width: '100%'

    },

    femaleCardText: {

        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },

    femaleCardImage: {
        borderRadius: 10
    },

    femaleFashionText: {

        fontSize: 35,
        color: '#000'

    }

});

export default { WhiteClothe, FloweryDress, ShoesColorS, ShoesPink, BlackDress, VintageBag, RedHotBag, HighHeels };