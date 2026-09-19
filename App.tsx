import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>100% OFFLINE</Text>
        </View>

        <Text style={styles.title}>Moneto</Text>
        <Text style={styles.subtitle}>Validação de fluxo: Windows ➔ iPhone</Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Toques de Teste:</Text>
          <Text style={styles.counterValue}>{contador}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setContador(c => c + 1)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Registrar Toque</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 4,
  },
  badge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 12,
  },
  badgeText: {
    color: '#059669',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 28,
  },
  counterBox: {
    marginBottom: 28,
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 12,
    color: '#94A3B8',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  counterValue: {
    fontSize: 52,
    fontWeight: '800',
    color: '#2563EB',
  },
  button: {
    backgroundColor: '#0F172A',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
