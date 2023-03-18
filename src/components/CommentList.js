import { useEffect, useState, useRef } from 'react';
import { FlatList, Text, Button, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import { v4 as uuidv4 } from 'uuid';

import CommentCard from './CommentCard';

import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function CommentList({ params }) {
  const [comments, setComments] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    get('comments', { ...params, page })
      .then((response) => response.json())
      .then((json) => {
        setComments(prevComments => [...prevComments, ...json.data]);
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
    <CommentCard comment={item} key={uuidv4()} />
  );

  const loadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setComments([]);
    setPage(1);
  };

  return (
    <FlatList
      ref={flatListRef}
      data={comments}
      renderItem={renderItem}
      keyExtractor={() => uuidv4()}
      ListHeaderComponent={() => (
        <Text style={typography.title_main}>{comments.length > 0 ? `Affichage de ${meta.end} ressources sur ${meta.total} ressources` : null}</Text>
      )}
      ListFooterComponent={() => (
        meta.next && !refreshing ? ( // if next page exists and not refreshing, show button
          <Button
            title={loading ? 'Chargement...' : 'Voir plus'}
            onPress={loadMore}
            disabled={loading}
            color={colors.primary}
          />
        ) : null
      )}
      ListEmptyComponent={() => (
        comments.length === 0 && !initialLoading && !refreshing ? (
          <Text style={[typography.title_main, { textAlign: 'center' }]}>Aucun commentaire trouvé</Text>

        ) : <ActivityIndicator size="large" color={colors.primary} />
      )}
      onRefresh={onRefresh}
      refreshing={refreshing}
      // scroll event handler to check if the top of the list is reached
      onScroll={({ nativeEvent }) => {
        if (nativeEvent.contentOffset.y === 0) {
          // if at top of list, reset comments and page and set refreshing to true
          setComments([]);
          setPage(1);
          setRefreshing(true);
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 }); // scroll to top
        }
      }}
    />
  );
}

export default CommentList;