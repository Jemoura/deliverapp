import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";

function Routes(){

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;