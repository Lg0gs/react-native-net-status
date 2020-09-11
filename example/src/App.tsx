import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NetStatus from 'react-native-net-status';

export default function App() {
  const [result, setResult] = React.useState<boolean | undefined>(true);

  React.useEffect(() => {
      NetStatus.addListener('onStateChange', ({ state }) => {
          setResult(state);
      });
  }, []);

  return (
    <View style={styles.container}>
       {result ? <Text>Connected</Text> : <Text>Disconnected</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
