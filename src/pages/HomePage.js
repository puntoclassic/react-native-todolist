import { View } from 'react-native';
import { Text } from 'react-native-paper';
import AddForm from '../components/AddForm';
import RenderList from '../components/RenderList';
import ClearButton from "../components/ClearButton";
import styles from "../styles"


export default function HomePage() {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>TodoList</Text>
            </View>
            <View style={styles.container}>
                <AddForm></AddForm>
                <RenderList></RenderList>
                <ClearButton></ClearButton>
            </View>
        </View >
    );
}

