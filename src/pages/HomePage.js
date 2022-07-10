import { View } from 'react-native';
import { Text } from 'react-native-paper';
import RenderList from '../components/RenderList';
import ClearButton from "../components/ClearButton";
import styles from "../styles"
import AddButton from '../components/AddButton';
import AddForm from '../components/AddForm';

export default function HomePage() {
    return (
        <View style={styles.homePage}>
            <AddForm></AddForm>
            <View style={styles.homePageHeader}>
                <Text style={styles.homePageHeaderTitle}>TodoList</Text>
            </View>
            <View style={styles.homePageBody}>
                <AddButton></AddButton>
                <RenderList></RenderList>
                <ClearButton></ClearButton>
            </View>
        </View >
    );
}

