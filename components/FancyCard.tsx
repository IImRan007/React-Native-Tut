import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mert-atakan-gDlo1_10y14-unsplash.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mountains</Text>
          <Text style={styles.cardLabel}>Jersey City</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            mollitia modi repudiandae, nulla dignissimos repellat quasi veniam
            nisi optio hic.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 400,
    height: 360,
    borderRadius: 6,
    margin: 10,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 14,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#000000',
  },
});
