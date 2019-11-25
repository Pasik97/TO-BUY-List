import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        top: 15,
        width: '100%',
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#1a1a1a',
        borderTopWidth: 5,
        borderBottomColor: '#1a1a1a',
        borderBottomWidth: 5,
    },
    text: {
        fontWeight: '700',
        color: '#f5f5f5',
        fontSize: 24,
    }
});
