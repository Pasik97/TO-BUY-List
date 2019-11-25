import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View, Button, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import { styles } from './styles';
import NewList from '../../NewList/NewList';


const ShoppingListDetails = ({ listName, items }) => {
    const [newItems, setItems] = useState([]);
    const [itemsToSave, setItemstoSave] = useState([]);
    const [openedView, setTheView] = useState('details');

    useEffect(() => {
        setItems(createArrayToMap());
    }, [])

    const createArrayToMap = () => {
        let categoryArray = [];
        let newArray = [];
        let finalArray = [];

        for (let i = 0; i < items.length; i++) {
            isCategoryAdded = false;
            for (let j = 0; j < items.length; j++) {
                if (typeof categoryArray[j] !== 'undefined' && categoryArray[j].replace(/\s/g, '') === items[i].category.replace(/\s/g, '')) {
                    isCategoryAdded = true;
                }
            }
            if (!isCategoryAdded) {
                categoryArray.push(items[i].category);
            }
        }

        for (let i = 0; i < categoryArray.length; i++) {
            newArray = [];
            for (let j = 0; j < items.length; j++) {
                if (categoryArray[i].replace(/\s/g, '') === items[j].category.replace(/\s/g, '')) {
                    newArray.push({ name: items[j].name, amount: items[j].amount });
                }
            }
            finalArray.push({ category: categoryArray[i], categoryItems: newArray })
        }
        return finalArray;
    }

    const deleteItem = (category, name, amount) => {
        let newList = [];
        let newLocalList = [];

        for (i = 0; i < items.length; i++) {
            if (!(items[i].category === category && items[i].name === name && items[i].amount === amount)) {
                newList.push(items[i]);
            }
        }

        let categoryItems = [];
        for (i = 0; i < newItems.length; i++) {
            categoryItems = [];
            for (let j = 0; j < newItems[i].categoryItems.length; j++) {
                if (!(newItems[i].category === category && newItems[i].categoryItems[j].name === name && newItems[i].categoryItems[j].amount === amount)) {
                    categoryItems.push(newItems[i].categoryItems[j]);
                }
            }
            if (categoryItems.length > 0) {
                newLocalList.push({ category: newItems[i].category, categoryItems: categoryItems })
            }
        }

        setItems(newLocalList);
        setItemstoSave(newList);
    }

    if (openedView === 'details') {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ marginBottom: 55 }}>
                    <Text style={styles.listName}>{listName}</Text>
                    {newItems && newItems.length > 0 && newItems.map((item, index) => (
                        <View key={index} style={styles.wrapper}>
                            <Text style={styles.category}>{item.category}</Text>
                            {item.categoryItems.map((it, i) => (
                                <View key={i} style={styles.itemWrapper}>
                                    <Text style={styles.item}>{it.name}</Text>
                                    <Text style={styles.amount}>{it.amount}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </ScrollView>
                <TouchableHighlight style={styles.saveButtonWrapper} onPress={() => setTheView('edit')}>
                    <View>
                        <Text style={styles.saveButton}>
                            Edytuj
                        </Text>
                    </View>
                </TouchableHighlight>
            </SafeAreaView>
        );
    }
    if (openedView === 'edit') {
        return (
            <NewList listNameProps={listName} itemsProps={items} />
        );
    }
}

export default ShoppingListDetails;
