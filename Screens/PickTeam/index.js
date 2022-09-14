import React ,{useState,useEffect}from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
import RoleCointainer from '../../Components'
import styles from './styles'
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const PickTeamPlayer=({navigation,route})=>{
    const detail=route.params.data
    const [player,setPlayer]=useState([])
    const [array,setArray] =useState([])
    const [array1,setArray1] =useState([])
    let bowler=0
    let batting=0
    let wicker=0
    let allrounder=0
    const [player1,setPlayer1]=useState(false)
    useEffect(()=>{PlayerDetails()},[])
const selectedPlayer=(el)=>{
 player1===1?setArray([...array,el]):setArray1([...array1,el])

// console.log(array.length,"array")
} 

// console.log(player,"array3333")
    const PlayerDetails=()=>{
return(
       axios
        .get(
          'https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json',
        )
        .then(response => {
          // console.log(response.data)
          setPlayer(response.data)
        })
        .catch( error=> {
          console.log(error,"error")
        }))
    }
    for (let i=0;i<array.length;i++){
      if (array[i].role==="Bowler"){
bowler=bowler+1}
if(array[i].role==="All-Rounder"){
  allrounder=allrounder+1
}
if(array[i].role==="Batsman"){
  batting=batting+1
}
if(array[i].role==="Wicket-Keeper"){
  wicker=wicker+1
}
    }
    for (let i=0;i<array1.length;i++){
      if (array1[i].role==="Bowler"){
bowler=bowler+1}
if(array1[i].role==="All-Rounder"){
  allrounder=allrounder+1
}
if(array1[i].role==="Batsman"){
  batting=batting+1
}
if(array1[i].role==="Wicket-Keeper"){
  wicker=wicker+1
}
    }
    
    
    return(<View style={{flex:1}}>
        <Text style={styles.Textcontainer}>{detail.match_name}</Text>
        <Text style={styles.PickTeamcontainer}>{player1===1?"Pick Team1":"Pick Team2"}</Text>
      
        <View style={styles.RoleParentCointainer}>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>BAT{batting}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>WK{wicker}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>AR{allrounder}</Text>
      </View>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>BOW{bowler}</Text>
      </View>
    </View>


      <Text style={styles.PickTeamcontainer}>{"Pick 3-7 Batman"}</Text>
     
      <View style={{height:250}}>
      <FlatList data={player}
      renderItem={ (el)=><TouchableOpacity style={styles.PlayersList} onPress={()=>selectedPlayer(el.item)}>
          
      <View style={{flex:2}}>
      <Text style={styles.PlayerNameCointainer}>{el.item.name}</Text></View>
      <View style={{flex:1}}>
      <Text style={styles.PlayerNameCointainer}>{el.item.event_total_points}</Text></View>
      <View style={{flex:1}}>
      <Text style={styles.PlayerNameCointainer}>{el.item.event_player_credit}</Text></View>
  </TouchableOpacity>}
      />
      </View>
      <View style={styles.ButtonWrapper}>
      <View style={styles.ButtonCointainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("selectTeamCaptain",{detail,array,array1,player1})}>
        <Text style={styles.ButtonTextCointainer}>{"Proceed"}</Text></TouchableOpacity>
      </View>
     
     <View style={styles.RoleParentCointainer}>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>{array.length}/11</Text>
        <Text style={styles.ButtonTextWrapper}>Players</Text>
      </View>
      <TouchableOpacity style={styles.RoleCointainer} onPress={()=>setPlayer1(1)}>
        <Text style={styles.RoleTextCointainer}>{array.length}</Text>
        <Text style={styles.ButtonTextWrapper}>NZW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.RoleCointainer} onPress={()=>setPlayer1(2)}>
        <Text style={styles.RoleTextCointainer}>{player1===2?array.length:0}</Text>
        <Text style={styles.ButtonTextWrapper}>ENGW</Text>
      </TouchableOpacity>
      <View style={styles.RoleCointainer}>
        <Text style={styles.RoleTextCointainer}>0</Text>
        <Text style={styles.ButtonTextWrapper}>cr left</Text>
      </View>
    </View>
    </View>
    </View>)
}

export default PickTeamPlayer