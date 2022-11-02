import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const imageProduct1 = require('../images/maleProduct1.png')
const imageProduct2 = require('../images/maleProduct2.png')
const imageProduct3 = require('../images/maleProduct3.png')
const imageProduct4 = require('../images/maleProduct4.png')
const imageProduct5 = require('../images/maleProduct5.png')
const imageProduct6 = require('../images/maleProduct6.png')
const imageProduct7 = require('../images/maleProduct7.png')
const imageProduct8 = require('../images/maleProduct8.png')



function WhiteClotheThin() {
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct1} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Blusa Bazzar Branca Thin</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 180,00</Text>

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

function SweatshirtYllw() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct2} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Moletom Bazzar Yllw</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 218,00</Text>

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

function ShoesRed() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct3} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Tênis Bazzar RedStar</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 200,00</Text>

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

function ShoesRnB() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct4} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Tênis Bazzar R&B</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 260,00</Text>

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

function BrownClotheThin() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct5} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Camisa Bazzar brown thin</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 125,00</Text>

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

function SocialClothe() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct6} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Camisa Bazzar social purple</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 200,00</Text>

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

function ShoesGrey() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct7} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Tênis Bazzar Casual</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 280,00</Text>

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

function BootHardWay() {

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            <ImageBackground source={imageProduct8} style={{ width: '100%', height: '65%' }}></ImageBackground>

            <View style={{ marginTop: -150, padding: 30, justifyContent: 'space-evenly' }}>

                <Text style={{ color: '#000', fontSize: 23, fontWeight: 'bold', marginBottom: 20 }}>Boot Bazzar HardWay</Text>

                <Text style={{ color: '#000', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                    <Text style={{ color: '#000', marginBottom: 20, fontWeight: 'bold', fontSize: 18 }}>Preço: </Text>
                    <Text style={{ color: '#000', marginBottom: 20, fontSize: 18 }}>R$ 255,00</Text>

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

export default { WhiteClotheThin, SweatshirtYllw, ShoesRed, ShoesRnB, BrownClotheThin, SocialClothe, ShoesGrey, BootHardWay };