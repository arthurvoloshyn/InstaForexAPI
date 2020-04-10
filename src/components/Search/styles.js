import { StyleSheet } from "react-native";
import { deviceWidth } from "../../services/getDeviceSize";

const styles = StyleSheet.create({
    input: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 26,
        marginBottom: 10,
        width: deviceWidth,
    },
});

export default styles;
