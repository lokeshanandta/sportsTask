import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 20,
    marginTop: 50,
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TextCointainer: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  ImageCointainer: {
    height: 50,
    width: 50,
  },
  TextStyle: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  TextCointainerView: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
