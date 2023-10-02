import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../Welcome';
import Graph from '../Graph';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome}
            options={{headerShown:false}}/>
            <Stack.Screen name='Graph' component={Graph}
            options={{headerShown:false}}/>
            
        </Stack.Navigator>
    )
}