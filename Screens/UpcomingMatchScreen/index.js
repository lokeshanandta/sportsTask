import React, {useEffect, useState} from 'react';
import {View, Text,ImageBackground,TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from 'axios';

const UpcomingmatchCointainer = ({navigation}) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    UpcomingMatchDetails();
  }, []);

  const UpcomingMatchDetails = () => {
    axios
      .get(
        'https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_upcoming_Matches.json',
      )
      .then(response => {
        // console.log(response)
        setTimeout(()=>{
            setDetails(...response.data.matches.cricket);
        },1000)
        
      })
      .catch(error => {
        console.log(error);
      });
  };
console.log(details)
  return (
    <View>
      <Text style={styles.TextCointainer}> Upcoming Matches</Text>
      
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("Team",{details})}>
        <View style={styles.ImageCointainer}>
          
            <ImageBackground source={{uri:details.t1_image}} style={{flex:1}}></ImageBackground>
        </View>
        <View style={styles.TextCointainerView}>
            <Text style={styles.TextStyle}>{details.event_name}</Text>
            <Text style={styles.TextStyle2}>{details.match_name}</Text>
        </View>
        <View style={styles.ImageCointainer}>
        <ImageBackground source={{uri:details.t2_image}} style={{flex:1}}></ImageBackground>
        </View>
        </TouchableOpacity>
     
    </View>
  );
};

export default UpcomingmatchCointainer;
