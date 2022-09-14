import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Textcontainer: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  PickTeamcontainer: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 17,
  },
  PlayersList: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
  },
  PlayerNameCointainer: {
    fontSize: 14,
    color: 'black',
    padding: 10,
  },
  ButtonCointainer: {
    height: 50,
    marginHorizontal: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    alignSelf: 'center',
  },
  ButtonTextCointainer: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 1,
    alignSelf: 'center',
  },
  ButtonWrapper: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  
  },
  RoleParentCointainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    height: 50,
   
    bottom: 10,
    
  },
  RoleCointainer: {
    height: 50,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  RoleTextCointainer: {color: 'black', alignSelf: 'center', fontSize: 16,padding:4,fontWeight:"bold"},
  ButtonTextWrapper: {color: 'black', fontSize: 15,alignSelf: 'center'}
});

export default styles;
