import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1
    },
    header: { height: 60, justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    headerTitle: {
        color: 'white', fontSize: 24
    },
    container: {
        padding: 16,
        flexDirection: "column",
        justifyContent: 'space-between',
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginHorizontal: 16,
    },

    inputContainer: {
        flexDirection: "column",
        padding: 8,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    inputButtonContainer: {
        alignItems: 'flex-end', marginTop: 8
    },
    listContainer: {
        marginTop: 8,
        flexGrow: 2,
        padding: 8,
    },
    listContainerTitle: {
        fontWeight: 'bold'
    },
    bottomBar: {
        marginTop: 8,
        padding: 8,

    }
});