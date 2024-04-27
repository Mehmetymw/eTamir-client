import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rating from './Rating'

export const Comment = ({ comment, author, rating }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.commentContainer, expanded && styles.expanded]}>
      <View style={styles.header}>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={12} color="white" />
          <Rating rating={rating}></Rating>
        </View>
      </View>
      <Text>{expanded ? comment : (comment.length > 100 ? comment.slice(0, 100)+'...' : comment.slice(0, 100) )}</Text>

      {comment.length > 100 && (
        <TouchableOpacity onPress={toggleExpanded} style={styles.showMoreButton}>
          <Text style={styles.showMoreText}>{expanded ? 'Daha Az Göster' : 'Daha Fazlasını Göster'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
    maxHeighteight: 'auto', 
  },
  expanded: {
    height: 'auto', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // author ve rating aynı hizada olması için
    marginBottom: 5,
  },
  ratingContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontWeight: 'bold',
  },
  showMoreButton: {
    marginTop: 5,
  },
  showMoreText: {
    color: '#'+process.env.BASE_COLOR,
  },
});


