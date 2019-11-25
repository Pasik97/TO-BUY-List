import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { styles } from './styles';
import cart from '../../assets/cart.png';

const WelcomePage = ({ setView }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={cart} />
    <View style={styles.navWrapper}>
      <Button color='#0fb7f2' title='Nowa lista zakupów' onPress={() => setView('newList')}/>
      <Button color='#0fb7f2' title='Zapisane listy zakupów' onPress={() => setView('savedLists')}/>
    </View>
  </View>
);

export default WelcomePage;
