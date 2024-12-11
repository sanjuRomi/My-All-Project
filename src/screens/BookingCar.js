import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import NavBar from "../Components/NavBar";

const BookingCar = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);

  const destinations = [
    { id: "1", route: "Indore to Bhopal", price: "₹2200" },
    { id: "2", route: "Bhopal to Indore", price: "₹2200" },    

  ];
  const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toISOString()
    .split("T")[0];

  const handleBooking = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    setShowTimePicker(true);
  };

  const handleTimeSelect = (event, selectedTimeValue) => {
    if (event.type === "set") {
      const currentTime = new Date();
      const selectedTime = selectedTimeValue || currentTime;

      const today = new Date().toISOString().split("T")[0];
      if (selectedDate === today && selectedTime < currentTime) {
        alert("You cannot select a past time.");
        setShowTimePicker(false);
        return;
      }

      setSelectedTime(
        selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }
    setShowTimePicker(false);
  };

  const scheduleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }
    closeModal();
    navigation.navigate("DetailsBookingCar", { date: selectedDate, time: selectedTime });
  };

  return (
    <>
      <NavBar title={"Personal Booking"} />
      <View style={styles.container}>
        <Text style={styles.description}>
          Select a route to book your ride.
        </Text>

        <FlatList
          data={destinations}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={handleBooking}
            >
              <View style={styles.cardContent}>
                <Text style={styles.route}>{item.route}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Choose Date & Time</Text>

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>

            <Calendar
              minDate={new Date().toISOString().split("T")[0]}
              maxDate={maxDate}
              onDayPress={handleDateSelect}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: "#4CAF50" },
              }}
              theme={{
                selectedDayBackgroundColor: "#4CAF50",
                todayTextColor: "#4CAF50",
                arrowColor: "#4CAF50",
              }}
            />

            <View style={styles.selectionContainer}>
              <Text style={styles.selectionText}>
                {selectedDate ? `Date: ${selectedDate}` : "Pick a date"}
              </Text>
              <Text style={styles.selectionText}>
                {selectedTime ? `Time: ${selectedTime}` : "Pick a time"}
              </Text>
            </View>

            {showTimePicker && (
              <DateTimePicker
                mode="time"
                value={new Date()}
                onChange={handleTimeSelect}
                display={Platform.OS === "ios" ? "spinner" : "default"}
              />
            )}

            <TouchableOpacity
              style={[
                styles.buttonContainer,
                !selectedDate || !selectedTime ? styles.disabledButton : {},
              ]}
              onPress={scheduleBooking}
              disabled={!selectedDate || !selectedTime}
            >
              <Text style={styles.buttonText}>Confirm Booking</Text>
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
    backgroundColor: "#F4F6F9",
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    height: 80,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  route: {
    fontSize: 18,
    fontWeight: "600",
    // color: "#444",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4CAF50",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#333",
  },
  selectionContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  selectionText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#E74C3C",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#BDC3C7",
  },
});

export default BookingCar;
