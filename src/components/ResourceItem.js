import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import UserIdentifier from './UserIdentifier';
import defaultImage from '../../assets/resources/default.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ResourceItem({ resource }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            <View style={styles.container}>
                <View style={styles.resourceContainer}>
                    <Image style={styles.image} source={resource.media && !resource.media.endsWith('.mp4') ? { uri: resource.media } : defaultImage} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{resource.title} {resource.isVerified ? <MaterialCommunityIcons name="check-decagram" size={16} color="#666" /> : null}</Text>
                        <View style={styles.badgesContainer}>
                            {resource.visibility ? resource.visibility == 1 ? <Text style={styles.badge}>Public</Text> : resource.visibility == 2 ? <Text style={styles.badge}>Protégé</Text> : resource.visibility == 3 ? <Text style={styles.badge}>Privé</Text> : null : null}
                        </View>
                        <View style={styles.badgesContainer}>
                            {resource.relation ? <Text style={styles.badge}>{resource.relation.name}</Text> : null}
                        </View>
                        <View style={styles.badgesContainer}>
                            {resource.categories.map((category, index) => <Text key={index} style={styles.badge}>{category.name}</Text>)}
                        </View>
                        <UserIdentifier user={resource.author} />
                        <Text style={styles.createdAt}>Publié le {new Date(resource.createdAt).toLocaleDateString()}</Text>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <HTML source={{ html: resource.content }} contentWidth={375} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContentContainer: {
        flexGrow: 1,
        paddingBottom: 24,
    },
    container: {
        alignItems: 'center',
        marginVertical: 8,
    },
    resourceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
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
    contentWrapper: {
        flex: 1,
        marginTop: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        fontSize: 14,
        color: '#333',
    },
});

export default ResourceItem;