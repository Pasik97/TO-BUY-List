import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Button, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import { styles } from './styles';

const NewList = ({ listNameProps = '', itemsProps = [] }) => {
    const [inputValue, onChange] = useState('');
    const [items, addItem] = useState(itemsProps);
    const [categoryInput, onCategoryChange] = useState('');
    const [listName, onNameChange] = useState(listNameProps);
    const [amount, onAmountChange] = useState('');

    const add = () => {
        if (inputValue && categoryInput && amount && Number(amount)) {
            addItem([...items, { name: inputValue, category: categoryInput, amount: amount }]);
            onCategoryChange('');
            onChange('');
            onAmountChange('');
        }
    }

    const deleteItem = (index) => {
        let newList = [];
        for (i = 0; i < items.length; i++) {
            if (i != index) {
                newList.push(items[i]);
            }
        }
        addItem(newList)
    }

    const saveNewList = async () => {
        if (listName.replace(/\s/g, '')) {
            let lists = '';
            let newList = []

            for (let i = 0; i < items.length; i++) {
                let count = Number(items[i].amount);
                for (j = 0; j < items.length; j++) {
                    if (i !== j && items[i].name.replace(/\s/g, '') === items[j].name.replace(/\s/g, '') && items[i].category.replace(/\s/g, '') === items[j].category.replace(/\s/g, '')) {
                        count = count + Number(items[j].amount);
                    }
                }
                let isInArray = false;
                for (k = 0; k < newList.length; k++) {
                    if (items[i].name.replace(/\s/g, '') === items[k].name.replace(/\s/g, '') && items[i].category.replace(/\s/g, '') === items[k].category.replace(/\s/g, '')) {
                        isInArray = true;
                    }
                }
                if (!isInArray) {
                    newList.push({ name: items[i].name, category: items[i].category, amount: count });
                }
            }

            try {
                lists = await AsyncStorage.getItem('newShoppingLists', async (err, result) => {
                    lists = JSON.parse(result);
                    let withNoItemList = [];

                    if (lists !== null) {
                        if (listNameProps !== '') {
                            for (i = 0; i < lists.length; i++) {
                                if (lists[i] !== null && lists[i].listName !== listNameProps) {
                                    withNoItemList.push(lists[i]);
                                }
                            }
                        } else {
                            withNoItemList = lists;
                        }
                        withNoItemList.push({ listName: listName, items: newList });
                    } else {
                        withNoItemList = [{ listName: listName, items: newList }];
                    }
                    try {
                        await AsyncStorage.setItem('newShoppingLists', JSON.stringify(withNoItemList));
                        onNameChange('');
                        onCategoryChange('');
                        onChange('');
                        onAmountChange('');
                        addItem([]);
                    } catch (error) {
                        console.log(error.message);
                    }
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper} >
                <View style={styles.listName}>
                    <Text style={styles.text}>
                        Nazwa Listy:
                    </Text>
                    <Text style={styles.text}>
                        Produkt:
                    </Text>
                    <Text style={styles.text}>
                        Kategoria:
                    </Text>
                    <Text style={styles.text}>
                        Ilość:
                    </Text>
                </View>
                <View style={styles.inputsWrapper}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={listNameProps !== '' ? () => { } : text => onNameChange(text)}
                        value={listName}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={text => onChange(text)}
                        value={inputValue}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={text => onCategoryChange(text)}
                        value={categoryInput}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={text => onAmountChange(text)}
                        value={amount}
                    />
                </View>
            </View>
            <Button color='#0fb7f2' title="Dodaj" onPress={() => add()} />
            <ScrollView style={styles.list}>
                {items.map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCategory}>{item.category}</Text>
                        <Text style={styles.amount}>{item.amount}</Text>
                        <Button color='#0fb7f2' title="-" onPress={() => deleteItem(index)} />
                    </View>
                ))}
            </ScrollView>
            <TouchableHighlight style={styles.saveButtonWrapper} onPress={() => saveNewList()}>
                <View>
                    <Text style={styles.saveButton}>
                        Zapisz
                    </Text>
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

export default NewList;
