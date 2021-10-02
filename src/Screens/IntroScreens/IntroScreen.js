import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {scale} from '../../Utils/Scaling';

export default function IntroScreen({navigation}) {
  const [showButton, setShowButton] = useState(false);

  const slides = [
    {
      key: 's1',
      text: 'Scan anything in HD, wherever you are...',
      title:
        'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
      image: require('../../Assets/Logo.png'),
      backgroundColor: '#20d2bb',
      skip: 'Skip',
    },
    {
      key: 's2',
      title:
        'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ',
      text: 'Navigate Work documents like a pro',
      image: require('../../Assets/Logo.png'),
      backgroundColor: '#febe29',
      skip: 'Skip',
    },
    {
      key: 's3',
      title:
        'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
      text: 'Less time scanning homework = more time for fun',
      image: require('../../Assets/Logo.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 's4',
      title:
        'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
      text: 'Covert Pictures to Text with our next generation offline OCR',
      image: require('../../Assets/Logo.png'),

      backgroundColor: '#22bcb5',
    },
  ];

  const RenderItem = ({item}) => {
    return (
      <View>
        <Image style={styles.logo} source={item.image} />

        <Text style={styles.Heading}>{item.text}</Text>
        <Text style={styles.subHeading}>{item.title}</Text>
        {showButton == true ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTabs');
            }}
            style={styles.button}>
            <Image
              style={styles.arrow}
              source={require('../../Assets/Arrow.png')}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      dotStyle={{
        backgroundColor: '#9B9B9B',
        width: 9,
        height: 9,
        borderRadius: 10,
        bottom: 80,
      }}
      activeDotStyle={{
        backgroundColor: '#49A6FC',
        width: 13,
        height: 13,
        borderRadius: 10,
        bottom: 80,
      }}
      onSlideChange={index => {
        console.log(index, 'hello');
      }}
      showDoneButton={true}
      doneLabel={'heeee'}
      onSlideChange={index => {
        console.log(index);
        if (index === 3) {
          setShowButton(true);
        } else if (index == 1 || index == 2 || index == 0) {
          setShowButton(false);
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingHorizontal: scale(20),
    marginBottom: 80,
  },
  logo: {
    marginTop: '20%',
    alignSelf: 'center',
  },
  Heading: {
    marginTop: scale(60),
    marginHorizontal: scale(70),
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  subHeading: {
    marginTop: scale(40),
    textAlign: 'center',
    marginHorizontal: scale(30),
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    bottom: -180,
    right: 35,
    height: 60,
    width: 60,
    backgroundColor: '#49A6FC',
    borderRadius: 30,
  },
  arrow: {
    alignSelf: 'center',
    marginVertical: scale(17),
  },
});
