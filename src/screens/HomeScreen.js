import { View, Text } from 'react-native';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function HomeScreen() {
  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>BIENVENUE SUR LE SITE DES RESSOURCES (RE)LATIONNELLES</Text>
    </View>
  );
};

export default HomeScreen;