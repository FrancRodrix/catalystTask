import React from 'react';
import {scale} from '../../Utils/Scaling';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import styles from './styles';
export default function Collections() {
  const scans = [
    {
      scanImage: require('../../Assets/backgound.png'),
      days: '2d ago',
    },
    {
      scanImage: require('../../Assets/backgound.png'),
      days: '2d ago',
    },
    {
      scanImage: require('../../Assets/backgound.png'),
      days: '2d ago',
    },
    {
      scanImage: require('../../Assets/backgound.png'),
      days: '2d ago',
    },
  ];

  const displayScans = ({item, index}) => {
    return (
      <View>
        <ImageBackground source={item.scanImage} style={styles.scanCopy}>
          {/* <Text>{item.scanText}</Text> */}
        </ImageBackground>
        <View style={styles.days}>
          <Text style={styles.daysText}>{item.days}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.header}>Good Evening</Text>
        <Text style={styles.subHeading}>Welcome Back</Text>
        <View style={styles.crown}>
          <Image
            resizeMode="contain"
            source={require('../../Assets/crown1.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.insideCrown}
            source={require('../../Assets/crown2.png')}
          />
        </View>
        <View style={styles.banner}>
          <Image
            resizeMode="cover"
            source={require('../../Assets/Banner.png')}
          />
        </View>
        <View style={styles.inputFeild}>
          <Image source={require('../../Assets/search.png')} />
          <TextInput
            style={styles.input}
            placeholder="Search through your scans"
          />
        </View>
        <View style={styles.scanColumn}>
          <View>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../Assets/scan.png')}
            />
            <Text style={styles.scanName}>Single Scan</Text>
          </View>
          <View>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../Assets/scan.png')}
            />
            <Image
              style={styles.backquote}
              source={require('../../Assets/blackscan.png')}
            />
            <Text style={styles.scanName}>Batch Scan</Text>
          </View>
          <View>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../Assets/scan.png')}
            />
            <Image
              style={styles.backquote}
              source={require('../../Assets/blackscan.png')}
            />
            <Text style={styles.scanName}>Scan to Text</Text>
          </View>
        </View>
        <Text style={styles.Name}>Recent Scans</Text>
        <View style={{marginLeft: scale(16)}}>
          <FlatList
            data={scans}
            renderItem={displayScans}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: scale(20),
            marginVertical: scale(20),
          }}>
          <Text style={styles.Name1}>Folders</Text>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../Assets/mail.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
