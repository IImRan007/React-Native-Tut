import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/1.jpeg',
      name: 'Defense the travel audience hand',
      status:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, quas.',
      id: 1,
    },
    {
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
      name: 'Space build policy people model treatment town hard use',
      status:
        'Much technology how within rather him lay why part actually system increase feel.',
      id: 2,
    },
    {
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
      name: 'Party about different guess bill too owner',
      status:
        'Street anything piece south yard since well point summer school economy respond people mother.',
      id: 3,
    },
    {
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/4.jpeg',
      name: 'Table husband',
      status:
        'Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.',
      id: 4,
    },
    {
      imageUrl: 'https://api.slingacademy.com/public/sample-photos/5.jpeg',
      name: 'Support audience model program three music',
      status:
        'World early north TV around meet goal across reason responsibility have must build up some language soon.',
      id: 5,
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, status, imageUrl}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#bc6c25',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
