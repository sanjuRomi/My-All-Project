import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomTabBar = ({state, descriptors, navigation}) => {

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tab}>
            {isFocused ? (
              <View style={styles.focusedTab}>
                {options.tabBarIcon && options.tabBarIcon({focused: true})}
                <Text style={styles.text}>{options.tabBarLabel}</Text>
              </View>
            ) : (
              <View style={{alignItems: 'center', flex: 1, paddingTop: 5}}>
                {options.tabBarIcon && options.tabBarIcon({focused: false})}
                <Text style={{...styles.text, color: 'gray'}}>
                  {options.tabBarLabel}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    elevation: 5,
    backgroundColor: '#fff', 
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedTab: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 13,
    flex: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomTabBar;
