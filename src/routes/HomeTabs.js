import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Main/Home';
import Finances from '../pages/Main/Finances';
import Produtos from '../pages/Main/Produtos';
import Config from '../pages/Main/Config';
import Perfil from '../pages/Main/Perfil';
import Contacts from '../pages/Main/Contacts';
import { FontAwesome5 } from "@expo/vector-icons";

const {Navigator,Screen}  = createBottomTabNavigator();
  
function HomeTabs () {
    return (
        <Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Produtos") {
                iconName = focused ? "plus" : "plus-square";
              } else if (route.name === "Finanças") {
                iconName = focused ? "list" : "list-alt";
              } else if (route.name === "Recursos") {
                iconName = focused ? "bars" : "bars";
              }  else if (route.name === "Perfil") {
                iconName = focused ? "user" : "user";
              } else if (route.name === "Contatos") {
                iconName = focused ? "comment-dots" : "comment-dots";
              }
    
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#8257E5",
            inactiveTintColor: "gray",
          }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Perfil" component={Perfil}/>
            <Screen name="Produtos" component={Produtos}/>
            <Screen name="Finanças" component={Finances}/>
            <Screen name="Contatos" component={Contacts}/>
            <Screen name="Recursos" component={Config}/>
           
        </Navigator>
    );
}
export default HomeTabs;