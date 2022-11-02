import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const imageWellcome = require('../images/marketing-mkt.png')
const imageAdress = require('../images/Market.png')


function AboutMarketScreen() {
    return (
        <View style={style.mainView}>
            <View style={style.wellcomeView}>

                <Text style={style.wellcomeViewTitle}>Bem vindos ao BAZZAR</Text>

                <Text style={style.wellcomeViewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                <View style={{ marginTop: 20 }}>
                    <ImageBackground source={imageWellcome} style={{ width: '100%', height: 146 }}></ImageBackground>
                </View>

            </View>

            <View style={style.line}></View>

            <View style={style.adress}>

                <View style={style.adressView}>

                    <Text style={{ fontSize: 18, color: '#000' }}>Rua Caleidoscópio nº286</Text>

                    <Text style={{ fontSize: 15, color: '#000' }}>Centro, Rio de Janeiro - RJ</Text>

                    <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}> Aberta de Segunda à Sexta das 09:30 às 20:30</Text>

                </View>

                <View>
                    <ImageBackground source={imageAdress} style={{ width: '100%', height: 160 }}></ImageBackground>
                </View>

            </View>
        </View>
    );
}

export default AboutMarketScreen;

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

    wellcomeView: {

        width: '95%',
        marginBottom: 10,
        padding: 10

    },

    wellcomeViewTitle: {

        width: 180,
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
    }
});