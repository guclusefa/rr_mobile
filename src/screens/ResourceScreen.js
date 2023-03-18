import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import ResourceItem from '../components/ResourceItem';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function ResourceScreen({ route }) {
    const { id } = route.params;

    const [resource, setResource] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        get(`resources/${id}`, {})
            .then((response) => response.json())
            .then((json) => {
                setResource(json.data);
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
                    <Text style={typography.title_main}>{resource.title}</Text>
                    <ResourceItem resource={resource} />
                </View>
            )}
        </View>
    );
}

export default ResourceScreen;
