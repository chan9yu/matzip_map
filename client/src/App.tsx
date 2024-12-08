import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Text>App Version 0.0.2</Text>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
