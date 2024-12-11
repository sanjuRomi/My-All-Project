import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, PixelRatio, Platform } from 'react-native';
import NavBar from '../Components/NavBar';

const DetailsBooking = ({ navigation }) => {
    const carModel = 'Hyundai AURA';
    const carNumber = 'XYZ 1234';
    const driverName = 'ZZZZZZZZZZZ';
    const driverRating = 4.5;
    const carFeatures = 'AC, GPS, Leather Seats';
    const routeName = 'Bhopal to Indore';
    const bookingTime = '10:30 AM';
    const price = 2200;
    const distance = 189.5;
    const carType = 'Sedan';
    const pickupLocation = 'Airport Rd, Raja Bhoj Airport Area, Gandhi Nagar, Bhopal, Madhya Pradesh 462036';
    const dropLocation = 'No.94, IDA Scheme, 95, Eastern Ring Rd, Vijay Nagar, Tulsi Nagar, Scheme No 94 Sector WA, Indore, Madhya Pradesh 452010';

    const handleConfirmBooking = () => {
        navigation.navigate('Payment');
    };

    return (
        <>
            <NavBar title="Your Booking Details" />
            <ScrollView contentContainerStyle={styles.container}>
                {/* Car and Driver Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Car & Driver Info</Text>
                    <View style={styles.card}>
                        <Text style={styles.infoRow}>Car Model: <Text style={styles.info}>{carModel}</Text></Text>
                        <Text style={styles.infoRow}>Car Number: <Text style={styles.info}>{carNumber}</Text></Text>
                        <Text style={styles.infoRow}>Driver: <Text style={styles.info}>{driverName}</Text></Text>
                        <Text style={styles.infoRow}>Driver Rating: <Text style={styles.info}>{driverRating} ⭐</Text></Text>
                        <Text style={styles.infoRow}>Car Features: <Text style={styles.info}>{carFeatures}</Text></Text>
                    </View>
                </View>

                {/* Booking and Price Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Booking Info</Text>
                    <View style={styles.card}>
                        <Text style={styles.infoRow}>Route: <Text style={styles.info}>{routeName}</Text></Text>
                        <Text style={styles.infoRow}>Booking Time: <Text style={styles.info}>{bookingTime}</Text></Text>
                        <Text style={styles.infoRow}>Price: <Text style={styles.info}>${price}</Text></Text>
                        <Text style={styles.infoRow}>Distance: <Text style={styles.info}>{distance} km</Text></Text>
                        <Text style={styles.infoRow}>Car Type: <Text style={styles.info}>{carType}</Text></Text>
                        <Text style={styles.infoRow}>Pickup Location: <Text style={styles.info}>{pickupLocation}</Text></Text>
                        <Text style={styles.infoRow}>Drop Location: <Text style={styles.info}>{dropLocation}</Text></Text>
                    </View>
                </View>

                {/* Confirmation Button */}
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
                    <Text style={styles.confirmButtonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

const { width, height } = Dimensions.get('window');
const scaleFont = size => size * PixelRatio.getFontScale();

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: width * 0.05,
        paddingTop: 20,
        paddingBottom: 30,
    },
    sectionTitle: {
        fontSize: scaleFont(22),
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
        paddingLeft: 10,
    },
    section: {
        marginBottom: 25,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    infoRow: {
        fontSize: scaleFont(16),
        fontWeight: '500',
        color: '#555',
        marginBottom: 10,
    },
    info: {
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: scaleFont(18),
        fontWeight: 'bold',
    },
});

export default DetailsBooking;
