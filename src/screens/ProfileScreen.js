import { View, Text } from 'react-native';

import UserItem from '../components/UserItem';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function ProfileScreen({ route }) {
    const { userId } = route.params;
    const user = {
        id: userId,
        username: 'john_doe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-555-5555',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    };
    return (
        <View style={layout.container}>
            <Text style={typography.title_main}>Profile de @{user.username}</Text>
            <UserItem user={user} />
        </View>
    );
}

export default ProfileScreen;
