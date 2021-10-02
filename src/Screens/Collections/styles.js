import {scale} from '../../Utils/Scaling';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'SF Pro Rounded',
    marginTop: scale(20),
    paddingHorizontal: scale(25),
  },
  subHeading: {
    fontSize: 18,
    color: '#9B9B9B',
    paddingHorizontal: scale(25),
    fontFamily: 'SF Pro Rounded',
  },
  insideCrown: {
    position: 'absolute',
    top: scale(5),
    left: scale(1.8),
  },
  crown: {
    position: 'absolute',
    right: scale(35),
    top: scale(38),
  },
  banner: {
    // width:'90%',
    marginVertical: scale(20),
    alignSelf: 'center',
  },
  inputFeild: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    // paddingVertical:scale(1),
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: scale(10),
  },
  input: {
    fontSize: 14,
    color: '#606060',
    paddingLeft: scale(10),
  },
  scanColumn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: scale(30),
  },
  scanName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: scale(5),
  },
  scanCopy: {
    backgroundColor: 'orange',
    height: scale(200),
    width: scale(150),
    marginRight: scale(15),
    borderRadius: 10,
  },
  days: {
    position: 'absolute',
    bottom: scale(10),
    left: scale(8),
    backgroundColor: '#49A6FC',
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
    borderRadius: 5,
  },
  daysText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  Name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: scale(24),
    paddingBottom: scale(15),
  },
  Name1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backquote: {
    position: 'absolute',
    top: scale(-10),
    right: scale(10),
  },
});
