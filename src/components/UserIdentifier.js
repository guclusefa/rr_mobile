import { Image, StyleSheet, Text, View } from 'react-native';

import defaultImage from '../../assets/users/default.png';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function UserIdentifier({ user }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={user.photo ? { uri: user.photo } : defaultImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>@{user.username} {user.isCertified ? <MaterialCommunityIcons name="check-decagram" size={16} color="#666" /> : null}</Text>
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
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 8,
        width: 30,
        height: 30,
    },
    detailsContainer: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserIdentifier;