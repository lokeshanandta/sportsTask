import React,{useState} from "react";
import {Text,View} from 'react-native'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
 
const selectTEamCaptain=({navigation,route})=>{
    const datas=route.params.detail
    const array=route.params.array
    const [captain,setCaptain]=useState()
    const [viseCaptain,setViseCaptain] =useState()
    const [list,setList]=useState(false)
    const team2=route.params.array1
    const team2page=route.params.player1
    // console.log(array,"lokesh")
 
const selectCaptain=(el)=>{
    array.forEach(el => {
        el.isShow=false
       })
el.item.isShow=true

setCaptain(el.item.name)
setList(!list)
}

const SelectViceCaptain =(el)=>{

    array.forEach(el => {
        el.isViceCaptain=false
       })
       
el.item.isViceCaptain=true
setViseCaptain(el.item.name)
setList(!list)
}
console.log(array)
const saveDetails= ()=>{navigation.navigate("Team",{captain,viseCaptain})}
    return(
    <View style={{flex:1}}>
<Text style={styles.container}>{datas.match_name}</Text>
<Text style={styles.Textcontainer}>{"Select Captain And Vice captain"}</Text>
<View style={styles.HeaderCointainer}>
    <View style={{flex:2}}>
<Text style={styles.container}>{"player 1"}</Text></View>
<View style={{flex:1}}><Text style={styles.container}>{"Pts"}</Text></View>
<View style={{flex:1}}><Text style={styles.container}>{"cr"}</Text></View>
</View>
    <View style={{height:300,marginHorizontal:20,borderWidth:2,marginTop:20,marginBottom:30}}>
    <FlatList  data={team2page===1?array:team2}
    renderItem={(el)=> <View style={styles.PlayersList}>
          
    <View style={{flex:2}}>
    <Text style={styles.PlayerNameCointainer}>{el.item.name}</Text></View>
    <View style={{flex:1}}>
    <Text style={styles.PlayerNameCointainer}>{el.item.event_total_points}</Text></View>
    <View style={{flex:1}}>
    <Text style={styles.PlayerNameCointainer}>{el.item.event_player_credit}</Text></View>
    <TouchableOpacity style={{backgroundColor:el.item.isShow===true?"green":"white",borderColor:"black",borderWidth:1,height:30,width:30,alignSelf:"center",margin:5}} onPress={()=>selectCaptain(el)}><Text style={{color:"black",alignSelf:"center"}}>C</Text></TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:el.item.isViceCaptain===true?"green":"white",borderColor:"black",borderWidth:1,height:30,width:30,alignSelf:"center",margin:5}} onPress={()=>SelectViceCaptain(el)}>
    <Text style={{color:"black",alignSelf:"center"}}>VC</Text>
    
    </TouchableOpacity>

</View>
}
    />

      
      </View>

      



<View style={styles.ButtonCointainer}>
    <TouchableOpacity onPress={()=>saveDetails()}>
    <Text style={styles.ButtonTextWrapper}>{"Save Team"}</Text>
    </TouchableOpacity>
</View>
</View>)}

export default selectTEamCaptain