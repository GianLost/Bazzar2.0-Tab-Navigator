import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const imageFemale = require('../images/Carousel.png')
const imageMale = require('../images/wellcomeBazzar.png')

const imageProductFemale1 = require('../images/female1.png')
const imageProductFemale2 = require('../images/female2.png')
const imageProductFemale3 = require('../images/female-boot1.png')
const imageProductFemale4 = require('../images/female-boot2.png')
const imageProductFemale5 = require('../images/female3.png')
const imageProductFemale6 = require('../images/female4.png')
const imageProductFemale7 = require('../images/female5.png')
const imageProductFemale8 = require('../images/female6.png')


const imageProductmale1 = require('../images/male1.png')
const imageProductmale2 = require('../images/male2.png')
const imageProductmale3 = require('../images/male-boot1.png')
const imageProductmale4 = require('../images/male-boot2.png')
const imageProductmale5 = require('../images/male3.png')
const imageProductmale6 = require('../images/male4.png')
const imageProductmale7 = require('../images/male5.png')
const imageProductmale8 = require('../images/male6.png')

const imageIcon1 = require('../images/relogio.png')
const imageIcon2 = require('../images/bolsas.png')
const imageIcon3 = require('../images/sapatos.png')
const imageIcon4 = require('../images/chapeus.png')



function CategoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F1BF3E' }}>
      <View style={style.productsTouchableView}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Moda Feminina')}
        >

          <ImageBackground source={imageFemale} style={style.productsTouchableBackground}><Text style={style.productsTitle1}>Moda Feminina</Text></ImageBackground>

        </TouchableOpacity>

      </View>

      <View style={{ width: '95%', height: '60%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap' }}>

        <View style={{ borderWidth: 5, borderRadius: 10, borderColor: '#fff', padding: 4, width: '40%', height: 160, marginTop: 90 }}>

          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} source={imageIcon1} style={{ width: '100%', height: '100%', borderRadius: 10 }}><Text style={style.productsTitle3}>Relógios</Text></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ borderWidth: 5, borderRadius: 10, borderColor: '#fff', padding: 4, width: '40%', height: 160 }}>

          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} source={imageIcon2} style={{ width: '100%', height: '100%', borderRadius: 10 }}><Text style={style.productsTitle3}>Bolsas</Text></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ borderWidth: 5, borderRadius: 10, borderColor: '#fff', padding: 4, width: '40%', height: 160 }}>

          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} source={imageIcon3} style={{ width: '100%', height: '100%', borderRadius: 10 }}><Text style={style.productsTitle3}>Sapatos</Text></ImageBackground>
          </TouchableOpacity>

        </View>

        <View style={{ borderWidth: 5, borderRadius: 10, borderColor: '#fff', padding: 4, width: '40%', height: 160 }}>

          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} source={imageIcon4} style={{ width: '100%', height: '100%', borderRadius: 10 }}><Text style={style.productsTitle3}>Chapéus</Text></ImageBackground>
          </TouchableOpacity>

        </View>

      </View>

      <View style={style.productsTouchableView}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Moda Masculina')}
        >

          <ImageBackground source={imageMale} style={style.productsTouchableBackground}><Text style={style.productsTitle2}>Moda Masculina</Text></ImageBackground>

        </TouchableOpacity>

      </View>
    </View>
  );
}

function FemaleScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={style.femaleFashion}>

        <View style={style.femaleFashionView}>

          <View style={style.femaleCards}>

            <TouchableOpacity style={style.femaleCardButton}
              onPress={() => navigation.navigate('Blusa Bazzar Branca')}
            >

              <Image source={imageProductFemale1} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Blusa Bazzar branca Revoir</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 80,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Vestido Bazzar Florido')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductFemale2} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Vestido Bazzar Florido</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 198,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Tênis Bazzar Color S')}
              style={style.femaleCardButton}
            >

              <Image source={imageProductFemale3} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Tênis Bazzar Color S</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 240,00</Text>

            </View>

          </View>


          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Tênis Bazzar Pink')}
              style={style.femaleCardButton}
            >

              <Image source={imageProductFemale4} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Tênis Bazzar Pink</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 220,00</Text>

            </View>

          </View>


          <View style={style.femaleCards}>
            <TouchableOpacity

              onPress={() => navigation.navigate('Vestido Bazzar Preto')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductFemale5} style={style.femaleCardImage}></Image>

            </TouchableOpacity>


            <View style={style.femaleCardText}>
              <Text style={style.markText}>Vestido Bazzar preto longo</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 265,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Bolsa Bazzar Vintage')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductFemale6} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Bolsa Bazzar vintage London</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 415,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Bolsa Bazzar Red Hot')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductFemale7} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Bolsa Bazzar Red Hot</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 280,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Sapato Bazzar Salto')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductFemale8} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Sapato Bazzar salto fashion</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 155,00</Text>

            </View>

          </View>

        </View>

      </View>
    </ScrollView>
  );
}

function MaleScreen({ navigation }) {
  return (

    <ScrollView>
      <View style={style.femaleFashion}>

        <View style={style.femaleFashionView}>

          <View style={style.femaleCards}>

            <TouchableOpacity style={style.femaleCardButton}
              onPress={() => navigation.navigate('Blusa Bazzar Branca Thin')}
            >

              <Image source={imageProductmale1} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Blusa Bazzar branca thin </Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 180,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Moletom Bazzar Yllw')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductmale2} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Moletom Bazzar Yllw</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 218,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Tênis Bazzar RedStar')}
              style={style.femaleCardButton}
            >

              <Image source={imageProductmale3} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Tênis Bazzar RedStar</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 200,00</Text>

            </View>

          </View>


          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Tênis Bazzar R&B')}
              style={style.femaleCardButton}
            >

              <Image source={imageProductmale4} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Tênis Bazzar R&B</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 260,00</Text>

            </View>

          </View>


          <View style={style.femaleCards}>
            <TouchableOpacity

              onPress={() => navigation.navigate('Camisa Bazzar Brown Thin')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductmale5} style={style.femaleCardImage}></Image>

            </TouchableOpacity>


            <View style={style.femaleCardText}>
              <Text style={style.markText}>Camisa Bazzar Brown thin</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 125,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Camisa Bazzar Social Purple')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductmale6} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Camisa Bazzar Social purple</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 200,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Tênis Bazzar Grey Casual')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductmale7} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Tênis Bazzar casual</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 280,00</Text>

            </View>

          </View>

          <View style={style.femaleCards}>

            <TouchableOpacity

              onPress={() => navigation.navigate('Boot Bazzar HardWay')}
              style={style.femaleCardButton}

            >

              <Image source={imageProductmale8} style={style.femaleCardImage}></Image>

            </TouchableOpacity>

            <View style={style.femaleCardText}>

              <Text style={style.markText}>Boot Bazzar HardWay</Text>

              <Text style={style.dismarkedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

              <Text style={style.markText}>Preço:</Text><Text style={style.dismarkedText}>R$ 255,00</Text>

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

  productsTitle3: {

    marginLeft: 10,
    marginTop: 95,
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

  },

  markText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12
  },

  dismarkedText: {
    color: '#000',
    fontSize: 12
  }
});

export default { CategoryScreen, FemaleScreen, MaleScreen };