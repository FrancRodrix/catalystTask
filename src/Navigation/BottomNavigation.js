import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {scale} from '../Utils/Scaling';
import {StyleSheet, Text, View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

import Collections from '../Screens/Collections/Collections';
import Settings from '../Screens/Settings/Settings';
import Add from '../Screens/Add/Add';

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'Collections':
              return iconName && focused ? (
                <Image source={require('../Assets/collections.png')} />
              ) : (
                <Image source={require('../Assets/collections.png')} />
              );
              break;
            case 'Add':
              return iconName && focused ? (
                <Image source={require('../Assets/settings.png')} />
              ) : (
                <Image source={require('../Assets/settings.png')} />
              );
              break;

            case 'Settings':
              return iconName && focused ? (
                <Image source={require('../Assets/settings.png')} />
              ) : (
                <Image source={require('../Assets/settings.png')} />
              );
              break;

            default:
              console.log(route.name);

              return <Image source={require('../Assets/settings.png')} />;
              break;
          }
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F3F3F3',
        inactiveTintColor: '#F3F3F3',
        tabStyle: {
          backgroundColor: '#f3f3f3',
          borderColor: '#f3f3f3',
        },
      }}>
      <Tab.Screen
        name="Collections"
        component={Collections}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name=" "
        component={Add}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.iconTabRound}>
              <Image source={require('../Assets/add.png')} />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  iconTabRound: {
    width: scale(63.5),
    height: scale(63.5),
    borderRadius: 50,
    marginBottom: scale(30),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49A6FC',
  },
});
