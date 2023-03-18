import { useEffect, useState, useRef } from 'react';
import { FlatList, Text, Button, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import { v4 as uuidv4 } from 'uuid';

import UserCard from './UserCard';

import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function UserList( {params, showInfo=true} ) {
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    get('users', { ...params, page })
      .then((response) => response.json())
      .then((json) => {
        setUsers(prevUsers => [...prevUsers, ...json.data]);
        setMeta(json.meta);
        setLoading(false);
        setInitialLoading(false);
        setRefreshing(false); // set refreshing to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setInitialLoading(false);
        setRefreshing(false); // set refreshing to false after error occurs
      });
  }, [page, refreshing]);

  const renderItem = ({ item }) => (
    <UserCard user={item} key={uuidv4()} />
  );

  const loadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setUsers([]);
    setPage(1);
  };

  return (
    <FlatList
      ref={flatListRef}
      data={users}
      renderItem={renderItem}
      keyExtractor={() => uuidv4()}
      ListHeaderComponent={() => (
        showInfo && users.length > 0 ? (
          <Text style={typography.title_main}>{`Affichage de ${meta.end} profils sur ${meta.total} profils`}</Text>
        ) : null
      )}
      ListFooterComponent={() => (
        meta.next && !refreshing && showInfo ? (
          <Button
            title={loading ? 'Chargement...' : 'Voir plus'}
            onPress={loadMore}
            disabled={loading}
            color={colors.primary}
          />
        ) : null
      )}
      ListEmptyComponent={() => (
        users.length === 0 && !initialLoading && !refreshing ? (
          <Text style={[typography.title_main, { textAlign: 'center' }]}>Aucun profil trouvé</Text>
        ) : <ActivityIndicator size="large" color={colors.primary} />
      )}
      onRefresh={onRefresh}
      refreshing={refreshing}
      // scroll event handler to check if the top of the list is reached
      onScroll={({ nativeEvent }) => {
        if (nativeEvent.contentOffset.y === 0) {
          // if at top of list, reset users and page and set refreshing to true
          setUsers([]);
          setPage(1);
          setRefreshing(true);
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 }); // scroll to top
        }
      }}
    />
  );
}

export default UserList;