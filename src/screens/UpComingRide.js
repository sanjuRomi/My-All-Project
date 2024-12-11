import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from '../Components/NavBar';

const upcomingRides = [
  {
    id: '1',
    date: '2024-11-08',
    time: '10:30 AM',
    destination: 'Downtown',
  },
  {
    id: '2',
    date: '2024-11-09',
    time: '2:00 PM',
    destination: 'Airport',
  },
  {
    id: '3',
    date: '2024-11-10',
    time: '5:15 PM',
    destination: 'Museum',
  },
];

const UpcomingRideScreen = () => {
  return (
    <>
      <NavBar title={'Upcoming Rides'} />
      <View style={styles.container}>        
        <FlatList
          data={upcomingRides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.rideItem}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.destination}>{item.destination}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rideItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
  destination: {
    fontSize: 14,
    color: '#333',
  },
});

export default UpcomingRideScreen;
