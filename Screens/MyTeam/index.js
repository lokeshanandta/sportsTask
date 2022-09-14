import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import styles from './styles';

const MyTeam = ({navigation, route}) => {
  const [showTeam, setShowTeam] = useState(false);
  const data = route.params.details
  const teamCaptain =route.params.captain
  const viseCaptain=route.params.viseCaptain
  
  return (
    <View style={{flex: 1}}>
      <Text style={styles.container}>{data.match_name}</Text>
      <Text style={styles.container1}>{'My Team'}</Text>
      {showTeam === true ? (
        <View style={styles.container2}>
          <Text style={styles.container3}>{'Team1'}</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={styles.container3}>{teamCaptain}</Text>
          <View style={{borderColor:"black",borderWidth:1,height:30,width:30,alignSelf:"center",margin:5}}><Text style={{alignSelf:"center",padding:5,color:"black",fontSize:10,fontWeight:"bold"}}>C</Text></View>
          </View>
          
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={styles.container3}>{viseCaptain}</Text>
          <View style={{borderColor:"black",borderWidth:1,height:30,width:30,alignSelf:"center",margin:5}}><Text style={{alignSelf:"center",padding:5,color:"black",fontSize:10,fontWeight:"bold"}}>VC</Text></View>
          </View>
          
        </View>
      ) : null}
       <View style={styles.container2}>
          <Text style={styles.container3}>{'Team2'}</Text></View>
      <View style={styles.container4}>
        <Button
          title="+ Add Button"
          style={{color: 'black'}}
          onPress={
            (() => {navigation.navigate("PickTeamPlayer",{data}),setShowTeam(true)}
            )
          }>
          <Text style={styles.container5}>{'+  Add Team'}</Text>
        </Button>
      </View>
    </View>
  );
};

export default MyTeam;
