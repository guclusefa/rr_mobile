import React, { useEffect, useState } from 'react';
import { FlatList, Text, Button, ActivityIndicator } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { get } from '../services/api';
import UserCard from './UserCard';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function UserList() {
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    get('users', { limit: 10, page })
      .then((response) => response.json())
      .then((json) => {
        setUsers([...users, ...json.data]);
        setMeta(json.meta);
        setLoading(false);
        setInitialLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setInitialLoading(false);
      });
  }, [page]);

  const renderItem = ({ item }) => (
    <UserCard user={item} key={uuidv4()} />
  );

  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={() => uuidv4()}
      ListHeaderComponent={() => (
        <Text style={typography.title_main}>{users.length > 0 ? `Affichage de ${meta.end} sur ${meta.total} utilisateurs` : null}</Text>
      )}
      ListFooterComponent={() => (
        meta.next ? (
          <Button
            title={loading ? 'Chargement' : 'Voir plus'}
            onPress={loadMore}
            disabled={loading}
            color={colors.primary}
          >
          </Button>
        ) : null
      )}
      ListEmptyComponent={() => (
        initialLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={typography.title_main}>Aucun utilisateur trouvé</Text>
        )
      )}
    />
  );
}

export default UserList;