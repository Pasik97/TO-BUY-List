import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    listName: {
        marginTop: 70,
        fontSize: 19,
        color: '#fff',
        width: '100%',
        textAlign: 'center',
    },
    wrapper: {
        marginTop: 10,
        width: '100%',
    },
    category: {
        fontSize: 17,
        color: '#0fb7f2',
        width: '100%',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        fontSize: 16,
        color: '#fff',
        width: '80%',
        marginLeft: 10,
        marginBottom: 3,
    },
    amount: {
        fontSize: 16,
        color: '#fff',
        width: '20%',
        marginBottom: 3,
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
});
