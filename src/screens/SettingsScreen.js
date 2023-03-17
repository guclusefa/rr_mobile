import { View, Text } from 'react-native';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function SettingsScreen() {
  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;