import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RoleCointainer = (props) => {
  return (
    <View style={styles.RoleParentCointainer}>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>{props.Text1}</Text>
        <Text style={styles.ButtonTextWrapper}>{props.Text5}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>{props.Text2}</Text>
        <Text style={styles.ButtonTextWrapper}>{props.Text6}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>{props.Text3}</Text>
        <Text style={styles.ButtonTextWrapper}>{props.Text7}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>{props.Text4}</Text>
        <Text style={styles.ButtonTextWrapper}>{props.Text8}</Text>
      </View>
    </View>
  );
};

export default RoleCointainer;

const styles = StyleSheet.create({
  RoleParentCointainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    height: 50,
  },
  RoleCointainer: {
    height: 50,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  RoleTextCointainer: {color: 'black', alignSelf: 'center', fontSize: 16,padding:4,fontWeight:"bold"},
  ButtonTextWrapper: {color: 'black', fontSize: 15,alignSelf: 'center'},
});
