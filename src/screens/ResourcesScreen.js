import { View, Text } from 'react-native';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function ResourcesScreen() {
  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>ResourcesScreen</Text>
    </View>
  );
};

export default ResourcesScreen;