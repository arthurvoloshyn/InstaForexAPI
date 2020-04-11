import { Platform, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../constants/themes";
import { isIOS } from "../../services/detectDevice";

const styles = StyleSheet.create({
    nav: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        ...Platform.select({
            ios: {
                borderBottomColor: PRIMARY_COLOR,
                borderBottomWidth: 1,
            },
            android: {
                backgroundColor: PRIMARY_COLOR,
            },
        }),
    },
    text: {
        color: isIOS ? PRIMARY_COLOR : '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
