import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpcomingmatchCointainer from '../Screens/UpcomingMatchScreen';
import MyTeam from '../Screens/MyTeam';
import PickTeamPlayer from '../Screens/PickTeam';
import selectTEamCaptain from '../Screens/SelectedTeam';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={UpcomingmatchCointainer} />
        <Stack.Screen name="Team" component={MyTeam} />
        <Stack.Screen name="PickTeamPlayer" component={PickTeamPlayer} />
        <Stack.Screen name="selectTeamCaptain" component={selectTEamCaptain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;