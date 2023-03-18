import { useEffect, useState, useRef } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import UserItem from '../components/UserItem';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function ProfileScreen({ route }) {
    const { id } = route.params;

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        get(`users/${id}`, {})
            .then((response) => response.json())
            .then((json) => {
                setUser(json.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }
        , []);

    return (
        <View style={layout.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <View>
                    <Text style={typography.title_main}>Profile de @{user.username}</Text>
                    <UserItem user={user} />
                </View>
            )}
        </View>
    );
}

export default ProfileScreen;
