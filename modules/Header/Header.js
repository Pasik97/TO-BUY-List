import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const Header = ({ setView }) => (
    <TouchableHighlight style={styles.container} onPress={() => setView('welcomePage')}>
        <View>
            <Text style={styles.text}>
                <Text style={{color: '#0fb7f2'}}>TO-BUY</Text> LIST
            </Text>
        </View>
    </TouchableHighlight>
);


export default Header;
