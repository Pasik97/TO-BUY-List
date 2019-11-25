import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from './styles';
import WelcomePage from './modules/WelcomePage/WelcomePage';
import Header from './modules/Header/Header';
import NewList from './modules/NewList/NewList';
import SavedLists from './modules/SavedLists/SavedLists';

export default function App() {
  const [openedView, setView] = useState('welcomePage');
  StatusBar.setBarStyle('light-content', true);
  return (
    <View style={styles.container}>
      <Header setView={setView} />
      {openedView === 'welcomePage' && <WelcomePage setView={setView} />}
      {openedView === 'newList' && <NewList />}
      {openedView === 'savedLists' && <SavedLists setView={setView} />}
    </View>
  );
}
