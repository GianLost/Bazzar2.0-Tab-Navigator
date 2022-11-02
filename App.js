import * as React from 'react';
import HomeTabScreen from './src/Components/HomeTabScreen';
import CategoryTabScreen from './src/Components/CategoryTabScreen';
import AboutMarketTabScreen from './src/Components/AboutMarketTabScreen';
import CardTabScreen from './src/Components/CardsTabScreen';
import FemaleProducts from './src/Components/FemaleProducts';
import MaleProducts from './src/Components/MaleProducts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = HomeTabScreen;

const Category = CategoryTabScreen.CategoryScreen;

const FemaleCategory = CategoryTabScreen.FemaleScreen;

const femaleProducts1 = FemaleProducts.WhiteClothe;
const femaleProducts2 = FemaleProducts.FloweryDress;
const femaleProducts3 = FemaleProducts.ShoesColorS;
const femaleProducts4 = FemaleProducts.ShoesPink;
const femaleProducts5 = FemaleProducts.BlackDress;
const femaleProducts6 = FemaleProducts.VintageBag;
const femaleProducts7 = FemaleProducts.RedHotBag;
const femaleProducts8 = FemaleProducts.HighHeels;

const maleCategory = CategoryTabScreen.MaleScreen;

const maleProducts1 = MaleProducts.WhiteClotheThin;
const maleProducts2 = MaleProducts.SweatshirtYllw;
const maleProducts3 = MaleProducts.ShoesRed;
const maleProducts4 = MaleProducts.ShoesRnB;
const maleProducts5 = MaleProducts.BrownClotheThin;
const maleProducts6 = MaleProducts.SocialClothe;
const maleProducts7 = MaleProducts.ShoesGrey;
const maleProducts8 = MaleProducts.BootHardWay;

const AboutMarket = AboutMarketTabScreen;

const Cards = CardTabScreen;

const homeIcon = <Icon name='md-home' size={30} color='#000' />;
const categoryIcon = <Icon name='cart' size={30} color='#000' />;
const aboutIcon = <Icon name='business-sharp' size={30} color='#000' />;
const cardIcon = <Icon name='card-sharp' size={30} color='#000' />;


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>

      <CategoryStack.Screen name="Categorias" component={Category} />

      <CategoryStack.Screen name="Moda Feminina" component={FemaleCategory} />

      <CategoryStack.Screen name="Blusa Bazzar Branca" component={femaleProducts1} />
      <CategoryStack.Screen name="Vestido Bazzar Florido" component={femaleProducts2} />
      <CategoryStack.Screen name="Tênis Bazzar Color S" component={femaleProducts3} />
      <CategoryStack.Screen name="Tênis Bazzar Pink" component={femaleProducts4} />
      <CategoryStack.Screen name="Vestido Bazzar Preto" component={femaleProducts5} />
      <CategoryStack.Screen name="Bolsa Bazzar Vintage" component={femaleProducts6} />
      <CategoryStack.Screen name="Bolsa Bazzar Red Hot" component={femaleProducts7} />
      <CategoryStack.Screen name="Sapato Bazzar Salto" component={femaleProducts8} />

      <CategoryStack.Screen name="Moda Masculina" component={maleCategory} />

      <CategoryStack.Screen name="Blusa Bazzar Branca Thin" component={maleProducts1} />
      <CategoryStack.Screen name="Moletom Bazzar Yllw" component={maleProducts2} />
      <CategoryStack.Screen name="Tênis Bazzar RedStar" component={maleProducts3} />
      <CategoryStack.Screen name="Tênis Bazzar R&B" component={maleProducts4} />
      <CategoryStack.Screen name="Camisa Bazzar Brown Thin" component={maleProducts5} />
      <CategoryStack.Screen name="Camisa Bazzar Social Purple" component={maleProducts6} />
      <CategoryStack.Screen name="Tênis Bazzar Grey Casual" component={maleProducts7} />
      <CategoryStack.Screen name="Boot Bazzar HardWay" component={maleProducts8} />

    </CategoryStack.Navigator>
  );
}

const AboutMarketStack = createNativeStackNavigator();

function AboutMarketStackScreen() {
  return (
    <AboutMarketStack.Navigator>
      <AboutMarketStack.Screen name="Sobre a Loja" component={AboutMarket} />
    </AboutMarketStack.Navigator>
  );
}

const CardStack = createNativeStackNavigator();

function CardStackScreen() {
  return (
    <CardStack.Navigator>
      <CardStack.Screen name="Cartões" component={Cards} />
    </CardStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomePage" component={HomeStackScreen} options={{ tabBarIcon: ({ color, size }) => (homeIcon), tabBarActiveTintColor: '#F1BF3E', tabBarInactiveTintColor: 'black' }} />
        <Tab.Screen name="Category" component={CategoryStackScreen} options={{ tabBarIcon: ({ color, size }) => (categoryIcon), tabBarActiveTintColor: '#F1BF3E', tabBarInactiveTintColor: 'black' }} />
        <Tab.Screen name="About Market" component={AboutMarketStackScreen} options={{ tabBarIcon: ({ color, size }) => (aboutIcon), tabBarActiveTintColor: '#F1BF3E', tabBarInactiveTintColor: 'black' }} />
        <Tab.Screen name="Cards" component={CardStackScreen} options={{ tabBarIcon: ({ color, size }) => (cardIcon), tabBarActiveTintColor: '#F1BF3E', tabBarInactiveTintColor: 'black' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

