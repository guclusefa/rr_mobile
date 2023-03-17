import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import defaultImage from '../../assets/users/default.png';

function UserCard({ user }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Profile', { userId: user.id })}>
            <Image style={styles.image} source={user.photo ? { uri: user.photo } : defaultImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.name}>
                    {user.firstName} {user.lastName}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 12,
    },
    detailsContainer: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 14,
        color: '#666',
    },
});

export default UserCard;