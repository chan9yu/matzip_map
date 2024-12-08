import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>App Version 0.0.1</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
