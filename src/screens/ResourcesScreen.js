import { View } from 'react-native';

import ResourceList from '../components/ResourceList';

import { layout } from '../styles/layout';

function ResourcesScreen() {
  return (
    <View style={layout.container}>
      <ResourceList />
    </View>
  );
};

export default ResourcesScreen;