import { View } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';
import styles from '../styles';


export default function ListItem({ children, onDeleteClick }) {
    return <>
        <View style={styles.listItem}>
            <Button mode='text' icon="check-outline"></Button>
            <Text style={styles.listItemText}>{children}</Text>
            <View style={styles.listItemButton}>
                <IconButton mode='outlined' icon="delete" onPress={onDeleteClick}></IconButton>
            </View>
        </View>
    </>;
}