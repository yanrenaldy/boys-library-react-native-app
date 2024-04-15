import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Collections,
  Profile,
  Subscriptions,
  Login,
  Register,
  Peminjaman,
  HistoryPinjam,
  DetailCollections,
  EditTransaksi,
} from '../pages';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2c3e50',
        inactiveTintColor: '#808080',
        showLabel: 'false',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Collections}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="book-open" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryPinjam}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="history" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-circle" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="NavigationTab"
        component={NavigationTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Transactions" component={Peminjaman} />
      <Stack.Screen name="History" component={HistoryPinjam} />
      <Stack.Screen name="Detail" component={DetailCollections} />
      <Stack.Screen name="Edit" component={EditTransaksi} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
