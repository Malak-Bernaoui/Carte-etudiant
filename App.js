import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/emsi-6.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.schoolName}>
        EMSI ORANGERS
      </Text>

      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>BERNAOUI</Text>
        </Text>

        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>MALAK</Text>
        </Text>

        <Text style={styles.label}>
          Année universitaire :
          <Text style={styles.value}> 2026 / 2027</Text>
        </Text>
         <Text style={styles.label}>
          Filiere :
          <Text style={styles.value}> Informatique et Reseaux</Text>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },

  logo: {
    width: 1000,
    height: 150,
  },

  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 15,
    marginBottom: 30,
  },

  info: {
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 12,
    width: '100%',
  },

  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },

  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});
