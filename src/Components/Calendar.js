import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';


const CalendarModal = ({ setModal , navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 365);
    const formattedDate = currentDate.toISOString().split('T')[0];
    setMaxDate(formattedDate);
  }, []);

  const onDateChange = (date) => {
    setSelectedDate(date.dateString);
    setShowTimePicker(true);  
  };

  const onTimeChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentTime = selectedDate || new Date();
      setSelectedTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setShowTimePicker(false);      
    }
    setShowTimePicker(false);  
  };

  const closeModal = () => {
    setModal(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  const ScheduleBook = ()=> {
    navigation.navigate("DetailsBookingCar");  
    setSelectedDate('');
    setSelectedTime('');
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <Calendar
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#4CAF50', selectedTextColor: 'white' },
              }}
              onDayPress={onDateChange}
              minDate={new Date().toISOString().split('T')[0]}
              maxDate={maxDate}
              theme={{
                selectedDayBackgroundColor: '#4a90e2',
                selectedDayTextColor: '#fff',
                todayTextColor: '#f2a654',
                arrowColor: '#4CAF50',
              }}
              style={styles.calendar}
            />

            {showTimePicker && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                is12Hour={true}
                display="clock"
                onChange={onTimeChange}
              />
            )}
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Selected Date:</Text>
              <Text style={[styles.infoValue, styles.dateText]}>
                {selectedDate || 'None'}
              </Text>
            </View>

            {selectedTime && (
              <>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Selected Time:</Text>
                  <Text style={[styles.infoValue, styles.timeText]}>
                    {selectedTime}
                  </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={ScheduleBook}>
                  <Text style={styles.buttonText}>Schedule Booking</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%', 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF4C4C',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  calendar: {
    width: '100%',
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
    width: '85%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,    
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  dateText: {
    color: '#1E90FF',
  },
  timeText: {
    color: '#FF6347',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default CalendarModal;
