import { StyleSheet } from "react-native";

export default StyleSheet.create({
    homePage: {
        flex: 1
    },
    homePageHeader: {
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    homePageHeaderTitle: {
        color: 'white', fontSize: 24
    },
    homePageBody: {
        padding: 16,
        flexDirection: "column",
        justifyContent: 'space-between',
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginHorizontal: 16,
    },
    addForm: {
        flexDirection: "column",
        padding: 8,
        backgroundColor: 'white'
    },
    addFormButton: {
        alignItems: 'flex-end', marginTop: 8
    },
    renderList: {
        marginTop: 8,
        flexGrow: 2,
        padding: 8,
    },
    renderListTitle: {
        fontWeight: 'bold'
    },
    clearButton: {
        marginTop: 8,
        padding: 8,
        alignItems: 'flex-start'
    },
    listItem: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    listItemText: {
        flex: 5
    },
    listItemButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    renderListBody: {
        flex: 1
    },
    modal: {
        margin: 16,
    }
});