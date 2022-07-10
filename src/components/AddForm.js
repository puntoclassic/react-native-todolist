import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setModalVisible } from '../redux/store';
import styles from "../styles"
import { Modal, Portal } from 'react-native-paper';

export default function AddForm() {
    const dispatch = useDispatch()
    const [currentValue, setCurrentValue] = useState("");
    const modalVisible = useSelector((state) => state.todolist).modalVisible;

    const buttonPressAction = () => {
        dispatch(addItem({
            item: currentValue
        }));
        setCurrentValue("");
        dispatch(setModalVisible({
            visible: false
        }))
    }

    const changeTextAction = (text) => {
        setCurrentValue(text)
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible);
        dispatch(setModalVisible({
            visible: false
        }))
    }

    return <>
        <Portal>
            <Modal style={styles.modal} visible={modalVisible} onDismiss={toggleModal}>
                <View style={styles.addForm}>
                    <View>
                        <TextInput
                            value={currentValue}
                            onChangeText={changeTextAction}
                            label="Descrizione"></TextInput>
                    </View>
                    <View style={styles.addFormButton}>
                        <Button onPress={buttonPressAction} mode='contained' disabled={currentValue == ""} >
                            Aggiungi
                        </Button>
                    </View>
                </View>
            </Modal>
        </Portal>

    </>
}