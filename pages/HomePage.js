import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Appbar, Button, Text, TextInput, useTheme, IconButton, List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { clearList, addItem, removeItem } from '../redux/store';



function ListItem({ children, onDeleteClick }) {
    return <>
        <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', }}>
            <Button mode='text' icon="check-outline"></Button>
            <Text style={{ flex: 5 }}>{children}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                <IconButton mode='outlined' icon="delete" onPress={onDeleteClick}></IconButton>
            </View>
        </View>
    </>;
}


export default function HomePage() {

    const { items } = useSelector((state) => state.todolist);
    const dispatch = useDispatch()

    const [currentValue, setCurrentValue] = useState("");

    const deleteItemAction = (index) => {
        dispatch(removeItem({
            index: index
        }));
    }

    const addItemAction = () => {
        dispatch(addItem({
            item: currentValue
        }));
        setCurrentValue("");
    }

    const clearListAction = () => {
        dispatch(clearList())
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>TodoList</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View>
                        <TextInput
                            value={currentValue}
                            onChangeText={(text) => setCurrentValue(text)}
                            label="Descrizione"></TextInput>
                    </View>
                    <View style={styles.inputButtonContainer}>
                        <Button onPress={addItemAction} mode='contained' disabled={currentValue == ""} >
                            Aggiungi
                        </Button>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <Text style={styles.listContainerTitle}>Elenco attività</Text>
                    <View style={{ flex: 1 }}>
                        <FlatList data={items} renderItem={(itemData) => {
                            return <ListItem key={itemData.index} onDeleteClick={() => deleteItemAction(itemData.index)}>{itemData.item}</ListItem>

                        }}></FlatList>
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <Button onPress={clearListAction} mode='text' >
                            Svuota lista
                        </Button>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
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


/**
 * 
 * 
 * 
 */