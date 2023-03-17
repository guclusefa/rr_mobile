import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function UserCard({ user }) {
    const renderPhoto = () => {
        if (user.photo) {
            return <Image style={styles.image} source={{ uri: user.photo }} />;
        }
        return <MaterialCommunityIcons name="account" size={50} color="#666" />;
    };

    return (
        <View style={styles.container}>
            {renderPhoto()}
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>{user.username}</Text>
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

export default UserCard;