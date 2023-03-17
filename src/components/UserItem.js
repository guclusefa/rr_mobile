import { Image, StyleSheet, Text, View } from 'react-native';

import defaultImage from '../../assets/users/default.png';

function UserItem({ user }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={user.photo ? { uri: user.photo } : defaultImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.name}>
                    {user.firstName} {user.lastName}
                </Text>
            </View>
        </View>
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

export default UserItem;