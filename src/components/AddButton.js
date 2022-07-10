import { View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../redux/store";
import styles from "../styles";

export default function AddButton() {
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(setModalVisible({
            visible: true
        }))
    }

    return <>
        <View style={styles.addForm}>
            <View style={styles.addFormButton}>
                <Button onPress={toggleModal}>
                    Aggiungi
                </Button>
            </View>
        </View>
    </>;
}