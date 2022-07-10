import { View } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';


export default function ListItem({ children, onDeleteClick }) {
    return <>
        <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', }}>
            <Button mode='text' icon="check-outline"></Button>
            <Text style={{ flex: 5 }}>{children}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                <IconButton mode='outlined' icon="delete" onPress={onDeleteClick}></IconButton>
            </View>
        </View>
    </>;
}