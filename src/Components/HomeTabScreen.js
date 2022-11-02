import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const imageTop = require('../images/mainImage.png')
const imageWellcome1 = require('../images/mainImg2.png')
const imageWellcome2 = require('../images/mainImg3.png')
const imageWellcome3 = require('../images/mainImg4.png')
const imageWellcome4 = require('../images/mainImg5.png')
const imageAdress = require('../images/Market.png')

function Home() {
    return (

        <ScrollView>

            <View style={style.mainView}>

                <Text style={style.mainTitle}>BAZZAR</Text>

                <View style={style.line}></View>

                <View>
                    <ImageBackground style={style.imageTop} source={imageTop}><Text style={style.textImageTop}>Descontos Imperdíveis de até 50% .</Text></ImageBackground>
                </View>

                <View style={style.viewButtonBuy}>

                    <TouchableOpacity style={style.buttonBuy}>

                        <Text style={style.buttonBuyText}>Veja mais</Text>

                    </TouchableOpacity>

                </View>

                <View style={style.line}></View>

                <View style={style.wellcomeView}>

                    <Text style={style.wellcomeViewTitle}>Venha fazer parte do nosso Bazzar!!!</Text>

                    <Text style={style.wellcomeViewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={imageWellcome2} style={{ width: '40%', height: 150, borderRadius: 10, marginTop: 20 }}></Image>
                        <Image source={imageWellcome1} style={{ width: '40%', height: 150, borderRadius: 10, marginTop: 20 }}></Image>
                        <Image source={imageWellcome3} style={{ width: '40%', height: 150, borderRadius: 10, marginTop: 20 }}></Image>
                        <Image source={imageWellcome4} style={{ width: '40%', height: 150, borderRadius: 10, marginTop: 20 }}></Image>

                        <View style={style.viewButtonBuy2}>

                            <TouchableOpacity style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

                                <Icon name='search' size={25} color='#fff' style={{ marginRight: 15 }}></Icon>
                                <Text style={style.buttonBuyText}>Buscar</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <View style={style.line}></View>

                <View style={style.footer}>

                    <View style={style.follow}>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Siga nos: </Text>

                        <View style={style.followIcons}>

                            <Icon name='logo-facebook' size={25} color='#000'></Icon>
                            <Icon name='logo-instagram' size={25} color='#000'></Icon>
                            <Icon name='logo-twitter' size={25} color='#000'></Icon>
                            <Icon name='logo-snapchat' size={25} color='#000'></Icon>

                        </View>

                    </View>

                </View>

            </View>

        </ScrollView>

    );

}


const style = StyleSheet.create({

    mainView: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F1BF3E'

    },

    line: {

        width: '97%',
        height: 2,
        backgroundColor: '#808080',
        marginBottom: 10

    },

    mainTitle: {

        marginLeft: -250,
        marginTop: 10,
        marginBottom: 6,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'fantasy'

    },

    imageTop: {

        alignItems: 'center',
        width: 380,
        height: 200,
        marginTop: 30,
        borderRadius: 10

    },

    textImageTop: {

        marginTop: 10,
        marginLeft: 180,
        width: 140,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18

    },

    viewButtonBuy: {

        width: 100,
        backgroundColor: '#151C45',
        marginTop: 20,
        marginBottom: 10,

    },

    viewButtonBuy2: {

        width: 150,
        height: 50,
        alignItems: 'center',
        marginLeft: '25%',
        justifyContent: 'center',
        backgroundColor: '#151C45',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 10,

    },

    buttonBuy: {

        alignItems: 'center',
        justifyContent: 'center',
        height: 36

    },

    buttonBuyText: {

        color: '#fff',
        fontSize: 'fantasy',
        fontWeight: 'bold',
        fontSize: 14

    },

    products: {

        width: '100%',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    productsTitle1: {

        marginLeft: 15,
        marginTop: 8,
        textDecorationLine: 'underline',
        fontFamily: 'fantasy',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },

    productsTitle2: {

        marginLeft: 210,
        marginTop: 8,
        textDecorationLine: 'underline',
        fontFamily: 'fantasy',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },

    productsTouchableView: {

        width: '100%',
        borderWidth: 2,
        borderColor: '#fff',

    },

    productsTouchableBackground: {

        width: '100%',
        height: 140,
        borderRadius: 10

    },

    wellcomeView: {

        width: '95%',
        marginBottom: 10,
        padding: 10

    },

    wellcomeViewTitle: {

        width: 220,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'fantasy',
        textAlign: 'left'
    },

    wellcomeViewText: {
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 15,
        color: '#fff'
    },

    adress: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30
    },

    adressView: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 160,
        backgroundColor: '#D2CFC1'
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '97%',
        flexDirection: 'row',
        marginTop: 15,

    },

    follow: {
        alignItems: 'center',
        width: '50%',
        height: 100,

    },

    followIcons: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15

    },

    cards: {
        alignItems: 'center',
        width: '50%',
        height: 100,

    },

    cardsIcons: {

        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15

    }

});

export default Home