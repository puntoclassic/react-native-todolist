import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { clearList } from '../redux/store';
import styles from "../styles"

export default function ClearButton() {
    const dispatch = useDispatch()

    const buttonPressAction = () => {
        dispatch(clearList())
    }

    return <>
        <View style={styles.clearButton}>
            <Button onPress={buttonPressAction} mode='text' >
                Svuota lista
            </Button>
        </View>
    </>
}