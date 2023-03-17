import { View } from 'react-native';

import { layout } from '../styles/layout';

import UserList from '../components/UserList';

function ProfilesScreen() {
  return (
    <View style={layout.container}>
      <UserList />
    </View>
  );
};

export default ProfilesScreen;