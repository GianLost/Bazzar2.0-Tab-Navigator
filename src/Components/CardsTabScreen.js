import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';


const imageCard1 = require('../images/master.png')
const imageCard2 = require('../images/visa.png')
const imageCard3 = require('../images/paypal.png')
const imageBoleto = require('../images/boleto.png')
const imagePix = require('../images/pix.png')


function CardScreen() {
  return (

    <ScrollView>
      <View style={style.mainView}>

        <View style={{ width: '90%', padding: 20, backgroundColor: '#fff', marginTop: 30, borderRadius: 10 }}>

          <Text style={{ color: '#F1BF3E', fontSize: 25, fontWeight: 'bold', fontFamily: 'fantasy', marginBottom: 20 }}>Pagamento seguro e Fácil!</Text>
          <Text style={{ color: '#F1BF3E', width: 360, fontSize: 18, fontFamily: 'fantasy', marginTop: 20, marginBottom: 20, textAlign: 'left' }}>Veja aqui as formas de pagamento aceitas e aproveite descontos imperdíveis...</Text>

        </View>

        <View style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>

          <TouchableOpacity>
            <ImageBackground source={imageCard1} style={{ width: '100%', height: 180 }}></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>

          <TouchableOpacity>
            <ImageBackground source={imageCard2} style={{ width: '100%', height: 180 }}></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>

          <TouchableOpacity>
            <ImageBackground source={imageCard3} style={{ width: '100%', height: 180 }}></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>

          <TouchableOpacity>
            <ImageBackground source={imagePix} style={{ width: '100%', height: 180 }}></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>

          <TouchableOpacity>
            <ImageBackground source={imageBoleto} style={{ width: '100%', height: 180 }}></ImageBackground>
          </TouchableOpacity>

        </View>



      </View>
    </ScrollView>

  );

}


const style = StyleSheet.create({

  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F1BF3E'

  },

});

export default CardScreen;