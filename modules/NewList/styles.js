import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    wrapper: {
        marginTop: 70,
        display: 'flex',
        flexDirection: 'row',
    },
    listName: {
        marginLeft: 10,
        width: '35%',
    },
    inputsWrapper: {
        width: '65%',
        marginRight: 10,
    },
    inputStyle: {
        height: 26,
        borderColor: '#0fb7f2',
        borderBottomWidth: 1,
        width: '90%',
        color: '#fff',
        fontSize: 17,
        marginBottom: 12,
    },
    text: {
        color: '#fff',
        fontSize: 19,
        marginRight: 10,
        marginBottom: 15,
    },
    saveButtonWrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1c1c1c',
        width: '100%',
        paddingTop: 14,
        paddingBottom: 14,
        display: 'flex',
        alignItems: 'center',
    },
    saveButton: {
        fontSize: 16,
        color: '#0fb7f2',
    },
    list: {
        marginTop: 5,
        borderTopColor: '#121212',
        borderTopWidth: 1,
        marginBottom: 55,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        marginLeft: 10,
        marginTop: 20,
    },
    itemName: {
        color: '#fff',
        fontSize: 15,
        width: '45%',
    },
    itemCategory: {
        color: '#fff',
        fontSize: 15,
        width: '35%',
        marginLeft: 10,
    },
    amount: {
        color: '#fff',
        fontSize: 15,
        width: '10%',
    },
});
