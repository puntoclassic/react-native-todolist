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
        <ListItem key={itemData.index} onDeleteClick={onDeleteClickAction.bind(this, itemData.index)}>{itemData.item}</ListItem>;

    return <>
        <View style={styles.renderList}>
            <Text style={styles.renderListTitle}>Elenco attività</Text>
            <View style={styles.renderListBody}>
                <FlatList data={items} renderItem={renderItem} keyExtractor={(item, index) => index}></FlatList>
            </View>
        </View>
    </>
}