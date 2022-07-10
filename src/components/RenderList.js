import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/store';
import styles from "../styles"
import ListItem from "../components/ListItem";

export default function RenderList() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.todolist);

    const onDeleteClickAction = (index) => {
        dispatch(removeItem({
            index: index
        }));
    }

    const renderItem = (itemData) =>
        <ListItem key={itemData.index} onDeleteClick={() => onDeleteClickAction(itemData.index)}>{itemData.item}</ListItem>;


    return <>
        <View style={styles.listContainer}>
            <Text style={styles.listContainerTitle}>Elenco attività</Text>
            <View style={{ flex: 1 }}>
                <FlatList data={items} renderItem={renderItem}></FlatList>
            </View>
        </View>
    </>
}