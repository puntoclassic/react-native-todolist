import HomePage from './pages/HomePage';
import { DefaultTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#034C8C',

  },
};


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{
            backgroundColor: theme.colors.primary, marginTop: StatusBar.currentHeight,
            flex: 1
          }}>
            <HomePage></HomePage>
          </SafeAreaView>
          <StatusBar style='light'></StatusBar>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider >
  );
}

