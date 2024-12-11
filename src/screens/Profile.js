import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Sanju Patidar</Text>
                    <Text style={styles.userEmail}>Sanju54545154@Gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={() => alert('Edit Profile')}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.additionalInfo}>
                <Text style={styles.sectionTitle}>Account Settings</Text>
                <TouchableOpacity style={styles.infoItem}>
                    <Text style={styles.infoText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem}>
                    <Text style={styles.infoText}>Privacy Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    userEmail: {
        fontSize: 14,
        color: '#777',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    additionalInfo: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    infoItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Profile;
