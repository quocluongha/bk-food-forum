import * as React from 'react';
import { StyleSheet, Text, View, Dimensions} from "react-native";
import IconLabel from './IconLabel';
const Header = ()=>{
    return (
       <View style={styles.container}>
            <IconLabel name='bars' label='Notifications'color='#fff'/>
       </View> 
    );
    
};
const deviceWidth = Dimensions.get("window").width;
const styles =StyleSheet.create ({
    container: {
        width:deviceWidth,
        height: 120,
        backgroundColor:"#0a094b",
        color: '#fff',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingLeft: 25,
    },
    labelStyle:{
        fontSize: 30,
        fontWeight: '500',
        color: '#fff',
      }
    },
);

export default Header;