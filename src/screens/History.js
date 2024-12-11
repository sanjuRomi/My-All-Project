// HistoryScreen.js
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import NavBar from '../Components/NavBar';

const rideHistoryData = [
  {
    id: '1',
    date: '2024-11-01',
    destination: 'Downtown',
    price: '$15',
    status: 'Completed',
  },
  {
    id: '2',
    date: '2024-11-05',
    destination: 'Airport',
    price: '$30',
    status: 'Completed',
  },
  {
    id: '3',
    date: '2024-10-20',
    destination: 'Uptown',
    price: '$12',
    status: 'Cancelled',
  },
];

const History = () => {
  const renderItem = ({ item }) => {
    // Define the color based on the status
    const statusColor = item.status === 'Completed' ? 'green' : 'red';

    return (
      <View style={styles.card}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.destination}>Destination: {item.destination}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        <Text style={[styles.status, { color: statusColor }]}>
          Status: {item.status}
        </Text>
      </View>
    );
  };

  return (
    <>
    <NavBar title={"History"}/>
    <FlatList
    data={rideHistoryData}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.container}
  />
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 3, 
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  destination: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default History;
