import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    data: {
        width: '100%',
        alignItems: 'center'
    },
    block: {
        width: '95%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        marginTop: 50,
        width: 100
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 26,
    },
});

export default styles;
