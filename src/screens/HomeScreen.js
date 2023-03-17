import { View, Text } from 'react-native';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function HomeScreen() {
  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;