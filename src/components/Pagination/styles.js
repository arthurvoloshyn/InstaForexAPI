import { StyleSheet } from "react-native";
import { deviceWidth } from "../../services/getDeviceSize";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: deviceWidth - 30
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        width: deviceWidth - 150,
    },
    text: {
        fontSize: 25
    }
});

export default styles;
