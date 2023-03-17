import { View, Text } from 'react-native';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function ProfilesScreen() {
  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>ProfilesScreen</Text>
    </View>
  );
};

export default ProfilesScreen;