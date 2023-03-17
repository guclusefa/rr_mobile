import { useEffect, useState } from 'react';
import { FlatList, Text, Button, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import { v4 as uuidv4 } from 'uuid';

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
    get('users', { order: "createdAt", direction: "DESC", page })
      .then((response) => response.json())
      .then((json) => {
        setUsers(prevUsers => [...prevUsers, ...json.data]);
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
    setPage(prevPage => prevPage + 1);
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={() => uuidv4()}
      ListHeaderComponent={() => (
        <Text style={typography.title_main}>{users.length > 0 ? `Affichage de ${meta.end} profils sur ${meta.total} profils` : null}</Text>
      )}
      ListFooterComponent={() => (
        meta.next ? (
          <Button
            title={loading ? 'Chargement...' : 'Voir plus'}
            onPress={loadMore}
            disabled={loading}
            color={colors.primary}
          />
        ) : null
      )}
      ListEmptyComponent={() => (
        users.length === 0 && !initialLoading ? (
          <Text style={typography.title_main}>Aucun utilisateur trouvé</Text>
        ) : <ActivityIndicator size="large" color={colors.primary} />
      )}
    />
  );
}

export default UserList;