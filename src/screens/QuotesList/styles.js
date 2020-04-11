import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../services/getDeviceSize";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
    },
    quotes: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: deviceWidth,
        height: deviceHeight - 270
    },
});

export default styles;
