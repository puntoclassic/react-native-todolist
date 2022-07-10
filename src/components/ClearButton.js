import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { clearList } from '../redux/store';
import styles from "../styles"




export default function ClearButton() {
    const dispatch = useDispatch()

    return <>
        <View style={styles.bottomBar}>
            <View style={{ alignItems: 'flex-start', }}>
                <Button onPress={() => {
                    dispatch(clearList())
                }} mode='text' >
                    Svuota lista
                </Button>
            </View>
        </View>
    </>
}