import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    list: {
        marginTop: 50,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        marginLeft: 10,
        marginTop: 20,
        fontSize: 17,
    },
});
