import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Button, AsyncStorage } from 'react-native';
import { styles } from './styles';
import ShoppingListDetails from './ShoppingListDetails/ShoppingListDetails';

const SavedLists = () => {
    const [lists, setLists] = useState(null);
    const [openedView, setView] = useState('savedLists');
    const [activeList, setActiveList] = useState(-1);

    useEffect(() => {
        getLists();
    }, []);

    const getLists = async () => {
        let savedLists;
        try {
            await AsyncStorage.getItem('newShoppingLists', async (err, result) => {
                savedLists = JSON.parse(result);
                setLists(savedLists)
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteItem = async (index) => {
        let newList = [];
        for (i = 0; i < lists.length; i++) {
            if (i != index) {
                newList.push(lists[i]);
            }
        }
        try {
            await AsyncStorage.setItem('newShoppingLists', JSON.stringify(newList));
            setLists(newList);
        } catch (error) {
            console.log(error.message);
        }
    }

    const showDetails = (index) => {
        setActiveList(index)
        setView('details')
    }

    return (
        <>
            {openedView === 'savedLists' && (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.list}>
                        {lists && lists.length > 0 && lists.map((item, index) => (
                            <View key={index} style={styles.listItem}>
                                {item !== null && typeof item.listName === 'string' && (
                                    <>
                                        <Button color='#fff' title={item.listName} onPress={() => showDetails(index)} />
                                        <Button color='#0fb7f2' title="-" onPress={() => deleteItem(index)} />
                                    </>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            )}
            {openedView === 'details' && <ShoppingListDetails listName={lists[activeList].listName} items={lists[activeList].items} />}
        </>
    );
}

export default SavedLists;
