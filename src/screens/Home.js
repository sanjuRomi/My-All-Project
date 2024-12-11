import React, { useEffect, useState, useRef } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Home = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);
  const [dropLocation, setDropLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          setLoading(false);
          return;
        }
      }
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setRegion(prev => ({ ...prev, latitude, longitude }));
          setLoading(false);
        },
        () => setLoading(false),
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 10000 }
      );
    };
    requestLocationPermission();
  }, []);

  const handleDropLocationSelect = (data, details) => {
    if (details?.geometry) {
      const { lat, lng } = details.geometry.location;
      const newRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setDropLocation({ latitude: lat, longitude: lng });
      setRegion(newRegion);
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.AutocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search for your current location"
          onPress={(data, details) => {
            const { lat, lng } = details.geometry.location;
            const newRegion = {
              ...region,
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            };
            setRegion(newRegion);
            mapRef.current?.animateToRegion(newRegion, 1000);
          }}
          fetchDetails
          query={{
            key: 'AIzaSyC9jIHqzexYb7V6aeJD5YIwYQuvZLFiXc8', language: 'en', types: 'geocode', components: 'country:in'
          }}
          styles={{
            container: { ...styles.searchContainer, top: 10 },
            textInput: styles.searchInput,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search for a drop location"
          onPress={handleDropLocationSelect}
          fetchDetails
          query={{
            key: 'AIzaSyC9jIHqzexYb7V6aeJD5YIwYQuvZLFiXc8', language: 'en', types: 'geocode', components: 'country:in'
          }}
          styles={{
            container: styles.searchContainer,
            textInput: styles.searchInput,
          }}
        />
      </View>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        onPress={e => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          setDropLocation({ latitude, longitude });
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
      >
        {dropLocation && (
          <Marker coordinate={dropLocation} title="Selected Location" />
        )}
      </MapView>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookingCar')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Personal Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  AutocompleteContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    elevation: 2,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
  },
  searchContainer: {
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4CAF50',
    height: 70,
    borderRadius: 35,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
