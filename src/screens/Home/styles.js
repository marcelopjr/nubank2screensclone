const { StyleSheet } = require('react-native')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5F249F',
        alignItems: 'center'
    },
    header: {
        height: 60,
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 8
    },
    scrollview: {
        width: '92%',

    },
    viewCreditCard: {
        marginTop: 15,
        backgroundColor: '#fff',

        height: 120,
        borderRadius: 3
    },
    viewAccount: {
        marginTop: 15,
        backgroundColor: '#fff',

        height: 120,
        borderRadius: 3
    },
    viewLifeSecurity: {
        marginTop: 15,
        backgroundColor: '#fff',

        height: 200,
        borderRadius: 3
    },
    viewGooglePay: {
        marginTop: 15,
        backgroundColor: '#fff',

        height: 120,
        borderRadius: 3,

        marginBottom: 15
    },
    menuFooter: {
        backgroundColor: '#5F249F',
        width: '100%',
        height: 120,
        justifyContent: 'center',


    },
    btnMenu: {

    }

});