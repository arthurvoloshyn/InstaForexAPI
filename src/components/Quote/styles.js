import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../constants/themes";

const styles = StyleSheet.create({
    quote: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 5,
        marginBottom: 10,
        flex: 1
    },
    text: {
        fontSize: 26,
    }
});

export default styles;
