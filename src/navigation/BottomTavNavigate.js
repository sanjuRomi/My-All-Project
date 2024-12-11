import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar/CustomeTab';
import Home from '../screens/Home';
import HomeIcon from '../assets/SvgImages/HomeIcon';
import History from '../screens/History';
import HistoryIcon from '../assets/SvgImages/HistoryIcon';
import UpcomingRideScreen from '../screens/UpComingRide';
import Profile from '../screens/Profile';
import ProfileIcon from '../assets/SvgImages/ProfileIcon';
import UpcomingRideIcon from '../assets/SvgImages/UpcomingRideIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingCar from '../screens/BookingCar';
// import BookCarTime from '../screens/BookCarTime';
import DetailsBooking from '../screens/DetailsBookingCar';
import Payment from '../screens/Payment';
// import CalendarModal from '../Components/Calendar';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const UserStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home} // AccountUserSettings screen
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BookingCar"
      component={BookingCar}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen name="BookCarTime" component={BookCarTime} options={{ headerShown: false }} /> */}
    {/* <Stack.Screen name="Calendar" component={CalendarModal} options={{ headerShown: false }} /> */}

    <Stack.Screen name="DetailsBookingCar" component={DetailsBooking} options={{ headerShown: false }} />
    <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />


  </Stack.Navigator>
);


const BottomTabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="UserStack"
        component={UserStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={22}
              height={22}
              fill={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ focused }) => (
            <HistoryIcon
              width={22}
              height={22}
              fill={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingRideScreen"
        component={UpcomingRideScreen}
        options={{
          tabBarLabel: 'Upcoming Ride',
          tabBarIcon: ({ focused }) => (
            <UpcomingRideIcon
              width={22}
              height={22}
              fill={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={22}
              height={22}
              fill={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
