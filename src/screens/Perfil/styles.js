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
        marginBottom: 10,
        marginTop: 45
    },
    scrollview: {
        width: '92%',

    },
    viewCreditCard: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 20,

        borderRadius: 3
    },
    viewAccount: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 20,

        borderRadius: 3
    },
    viewLifeSecurity: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 20,

        borderRadius: 3
    }, viewWhatsPay: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 20,

        borderRadius: 3,

    },
    viewGooglePay: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 20,

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