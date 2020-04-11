import { StyleSheet } from "react-native";
import { DANGER_COLOR } from "../../constants/themes";

const styles = StyleSheet.create({
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: DANGER_COLOR,
        marginBottom: 20
    },
});

export default styles;
