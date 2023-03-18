import { Image, StyleSheet, Text, View } from 'react-native';

import defaultImage from '../../assets/users/default.png';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function UserItem({ user }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={user.photo ? { uri: user.photo } : defaultImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>@{user.username} {user.isCertified ? <MaterialCommunityIcons name="check-decagram" size={16} color="#666" /> : null}</Text>
                <Text style={styles.name}>
                    {user.firstName} {user.lastName}
                </Text>
                {user.bio ? <Text style={styles.bio}>{user.bio}</Text> : null}
                <View style={styles.badgesContainer}>
                    {user.roles[0] ?
                        user.roles[0] === 'ROLE_SUPER_ADMIN' ? <Text style={styles.badge}>Super Admin</Text> :
                            user.roles[0] === 'ROLE_ADMIN' ? <Text style={styles.badge}>Admin</Text> :
                                user.roles[0] === 'ROLE_MODERATOR' ? <Text style={styles.badge}>Modérateur</Text> :
                                    user.roles[0] === 'ROLE_USER' ? <Text style={styles.badge}>Utilisateur</Text> :
                                        null : null}
                    {user.gender ?
                        user.gender == "M" ? <Text style={styles.badge}>Homme</Text> :
                            user.gender == "F" ? <Text style={styles.badge}>Femme</Text> :
                                user.gender == "O" ? <Text style={styles.badge}>Autre</Text> :
                                    null : null}
                    {user.state ? <Text style={styles.badge}>{user.state.name}</Text> : null}
                </View>
                <Text style={styles.createdAt}>Membre depuis le {new Date(user.createdAt).toLocaleDateString()}</Text>
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
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 8,
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
    bio: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    badgesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 4,
    },
    badge: {
        fontSize: 12,
        backgroundColor: '#666',
        color: 'white',
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 4,
    },
    createdAt: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
});

export default UserItem;