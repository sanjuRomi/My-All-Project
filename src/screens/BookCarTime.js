// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { useNavigation } from '@react-navigation/native';

// const getDatesForWeek = () => {
//     const dates = [];
//     const today = new Date();
//     for (let i = 0; i < 15; i++) {
//         const date = new Date();
//         date.setDate(today.getDate() + i);
//         dates.push({
//             day: date.getDate(),
//             fullDate: date,
//             label: i === 0 ? 'Today' : date.toLocaleString('default', { weekday: 'short' }),
//         });
//     }
//     return dates;
// };

// const fetchDataForDate = (date) => {
//     const dayOfWeek = date.getDay();
//     const bookings = [];

//     if (dayOfWeek === 0) {
//         bookings.push(
//             { id: '1', bookingTime: '10:00 AM to 03:00 PM' },
//             { id: '2', bookingTime: '03:00 PM to 08:00 PM' },
//             { id: '3', bookingTime: '08:00 PM to 01:00 AM' }
//         );
//     } else if (dayOfWeek === 1) {
//         bookings.push(
//             { id: '1', bookingTime: '09:00 AM to 02:00 PM' },
//             { id: '2', bookingTime: '02:00 PM to 07:00 PM' },
//             { id: '3', bookingTime: '07:00 PM to 12:00 AM' },
//             { id: '4', bookingTime: '12:00 AM to 05:00 AM' }
//         );
//     } else if (dayOfWeek === 2) {
//         bookings.push(
//             { id: '1', bookingTime: '11:00 AM to 04:00 PM' },
//             { id: '2', bookingTime: '04:00 PM to 09:00 PM' }
//         );
//     } else if (dayOfWeek === 4) {
//         bookings.push(
//             { id: '1', bookingTime: '11:00 AM to 04:00 PM' },
//             { id: '2', bookingTime: '04:00 PM to 09:00 PM' },
//             { id: '3', bookingTime: '09:00 PM to 02:00 AM' },
//             { id: '4', bookingTime: '02:00 AM to 07:00 AM' }
//         );
//     } else if (dayOfWeek === 5) {
//         bookings.push(
//             { id: '1', bookingTime: 'Car booked from 11:00 AM to 04:00 PM' },
//             { id: '2', bookingTime: 'Car booked from 04:00 PM to 09:00 PM' }
//         );
//     } else {
//         bookings.push(
//             { id: '1', bookingTime: 'No bookings available for today' }
//         );
//     }

//     return bookings;
// };

// const DatePicker = ({ onDateSelect }) => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//     const dates = getDatesForWeek();

//     const selectDate = (date) => {
//         setSelectedDate(date.fullDate);
//         onDateSelect(date.fullDate);
//     };

//     const handleConfirm = (date) => {
//         setSelectedDate(date);
//         onDateSelect(date);
//         setDatePickerVisibility(false);
//     };

//     return (
//         <View style={styles.dateContainer}>
//             <FlatList
//                 horizontal
//                 data={dates}
//                 keyExtractor={(item) => item.fullDate.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => selectDate(item)}>
//                         <View style={[
//                             styles.dateItem,
//                             selectedDate.toDateString() === item.fullDate.toDateString() && styles.selectedDate
//                         ]}>
//                             <Text style={styles.label}>{item.label}</Text>
//                             <Text style={styles.day}>{item.day}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 )}
//                 showsHorizontalScrollIndicator={false}
//             />
//             <TouchableOpacity style={styles.calendarIcon} onPress={() => setDatePickerVisibility(true)}>
//             </TouchableOpacity>
//             <DateTimePickerModal
//                 isVisible={isDatePickerVisible}
//                 mode="date"
//                 onConfirm={handleConfirm}
//                 onCancel={() => setDatePickerVisibility(false)}
//             />
//         </View>
//     );
// };

// const BookCarTime = ({ route }) => {
//     const [data, setData] = useState([]);
//     const { route: selectedRoute, price } = route.params;
//     const navigation = useNavigation();

//     useEffect(() => {
//         const initialData = fetchDataForDate(new Date());
//         setData(initialData);
//     }, []);

//     const handleDateSelect = (date) => {
//         const filteredData = fetchDataForDate(date);
//         setData(filteredData);
//     };

//     const navigateToDetailsBooking = (item) => {
//         navigation.navigate('DetailsBookingCar', {
//             bookingTime: item.bookingTime,
//             route: selectedRoute,
//             price
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <DatePicker onDateSelect={handleDateSelect} />
//             <View>
//                 {data.map((item) => (
//                     <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToDetailsBooking(item)}>
//                         <View style={styles.highlightBar}></View>
//                         <View style={styles.cardContent}>
//                             <Text style={styles.bookingTime}>{item.bookingTime}</Text>
//                             <Text style={styles.bookingDetails}>{selectedRoute}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f8f8',
//     },
//     dateContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#333',
//         paddingVertical: 10,
//     },
//     dateItem: {
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         alignItems: 'center',
//         marginHorizontal: 5,
//         borderRadius: 10,
//         backgroundColor: '#444',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 3,
//         elevation: 5,
//     },
//     selectedDate: {
//         backgroundColor: '#4CAF50',
//     },
//     label: {
//         color: '#fff',
//         fontSize: 12,
//     },
//     day: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     calendarIcon: {
//         marginLeft: 10,
//         padding: 5,
//     },
//     card: {
//         flexDirection: 'row',
//         backgroundColor: '#ffffff',
//         borderRadius: 15,
//         marginVertical: 10,
//         marginHorizontal: 20,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.1,
//         shadowRadius: 6,
//         elevation: 8,
//     },
//     highlightBar: {
//         width: 6,
//         backgroundColor: '#4CAF50',
//     },
//     cardContent: {
//         flex: 1,
//         padding: 15,
//         backgroundColor: '#f1f1f1',
//     },
//     bookingTime: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 5,
//     },
//     bookingDetails: {
//         fontSize: 14,
//         color: '#666',
//     },
// });

// export default BookCarTime;
