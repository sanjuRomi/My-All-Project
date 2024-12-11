import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import NavBar from '../Components/NavBar';
import VisaIcon from '../assets/SvgImages/VIsaIcon';
import MastercardIcon from '../assets/SvgImages/MastercardIcon';

const PaymentScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const paymentMethods = [
    { id: '1', type: 'Visa', number: '**** **** **** 8970', expiry: '12/26', icon: <VisaIcon /> },
    { id: '2', type: 'Mastercard', number: '**** **** **** 8970', expiry: '12/26', icon: <MastercardIcon /> },
    { id: '3', type: 'PayPal', email: 'mailaddress@mail.com', expiry: '12/26', icon: '' },
    { id: '4', type: 'Cash' },
  ];

  const handlePayment = () => {
    setModalVisible(true);
  };

  const modalData = [
    { label: 'Car Name', value: 'Hyundai AURA' },
    { label: 'Transaction ID', value: '#TXN123456789' },
    { label: 'Payment Method', value: 'Visa ****8970' },
    { label: 'Amount Paid', value: '$2250' },
    { label: 'Date', value: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` },
  ];


  return (
    <>
      <NavBar title={"Payment"} />
      <View style={styles.container}>
        {/* Car Details */}
        <View style={styles.carDetails}>
          {/* <Image /> */}
          <View>
            <Text style={styles.carName}>Hyundai AURA</Text>
            <Text style={styles.rating}>⭐ 4.9 (531 reviews)</Text>
          </View>
        </View>

        {/* Charges Section */}
        <View style={styles.charges}>
          <Text style={styles.chargeItem}>Mustang/per hour: $200</Text>
          <Text style={styles.chargeItem}>Vat (5%): $20</Text>
          <Text style={styles.chargeItem}>Promo Code: -$5</Text>
          <Text style={styles.total}>Total: $2250</Text>
        </View>

        {/* Payment Methods */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginRight: 10 }}>
            <Text style={styles.paymentTitle}>Select payment method</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={paymentMethods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.paymentMethod}>
              <View style={styles.iconWrapper}>
                {item.icon || <Text style={styles.placeholderIcon}>💵</Text>}
              </View>
              <View>
                <Text style={styles.methodText}>
                  {item.type === 'Cash'
                    ? 'Cash'
                    : item.type + ' ' + (item.number || item.email)}
                </Text>
                {item.expiry && <Text style={styles.expiry}>Expires: {item.expiry}</Text>}
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
          <Text style={styles.confirmButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>            
            <View style={styles.successIconWrapper}>
              <Text style={styles.successIcon}>✔</Text>
            </View>          
            <Text style={styles.modalTitle}>Payment Success</Text>            
            <Text style={styles.modalSubtitle}>Your transaction was successful.</Text>            
            <View style={styles.modalContent}>
              {modalData.map((item, index) => (
                <View key={index} style={styles.modalCard}>
                  <Text style={styles.modalCardLabel}>{item.label}</Text>
                  <Text style={styles.modalCardValue}>{item.value}</Text>
                </View>
              ))}
            </View>            
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.doneButtonText}>Got It</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  carDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    backgroundColor: '#E8F5E9',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    color: '#666',
  },
  charges: {
    marginBottom: 20,
  },
  chargeItem: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewAll: {
    color: '#4CAF50',
    fontSize: 14,
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  placeholderIcon: {
    fontSize: 24,
  },
  methodText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expiry: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 10,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ////////////////
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successIconWrapper: {
    backgroundColor: '#4caf50',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successIcon: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalContent: {
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
  },
  modalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  modalCardLabel: {
    fontSize: 16,
    color: '#555',
  },
  modalCardValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  doneButton: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

});

export default PaymentScreen;
