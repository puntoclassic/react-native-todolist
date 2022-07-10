import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/store';
import styles from "../styles"

export default function AddForm() {
    const dispatch = useDispatch()

    const [currentValue, setCurrentValue] = useState("");
    return <>
        <View style={styles.inputContainer}>
            <View>
                <TextInput
                    value={currentValue}
                    onChangeText={(text) => setCurrentValue(text)}
                    label="Descrizione"></TextInput>
            </View>
            <View style={styles.inputButtonContainer}>
                <Button onPress={() => {
                    dispatch(addItem({
                        item: currentValue
                    }));
                    setCurrentValue("");
                }} mode='contained' disabled={currentValue == ""} >
                    Aggiungi
                </Button>
            </View>
        </View>
    </>
}