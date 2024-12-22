import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Get the full screen dimensions
const { width, height } = Dimensions.get('window');

// A simple function to scale font size
const scaleFont = (size) => size * (width / 375);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7EC48D',
    borderRadius: 10,
    height: height * 0.4, // dynamic height based on screen size
    width: width * 0.85, // dynamic width based on screen size
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 10
  },
  miniContainer: {
    gap: 20,
  },
  uploadContainerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  monthContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    height: 32, // consider making this dynamic if needed
    width: width * 0.3, // dynamic width based on screen size
    justifyContent: 'center',
    elevation: 10,
  },
  TextInput: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    height: 32, // consider making this dynamic if needed
    width: width * 0.25, // dynamic width based on screen size
  },
  uploadContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    height: 32, // consider making this dynamic if needed
    width: width * 0.65, // dynamic width based on screen size
    justifyContent: 'center',
    elevation: 10
  },
  miniIcon: {
    marginLeft: 15,
    height: 10,
    width: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'InterRegular',
    fontSize: scaleFont(14), // dynamically scaled font size
    textAlign: 'left',
    padding: 8,
  },
  uploadButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 10
  },
  textButton: {
    padding: 10,
    fontFamily: 'InterRegular',
    textAlign: 'center',
    fontSize: 12,
    alignSelf: 'center'
    
  },
});

export default styles;
