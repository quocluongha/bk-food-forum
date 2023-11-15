import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const IconLabel = ({name,label,color}) => {
    return (
        <View style={styles.container}>
            <FontAwesome 
            name={name} 
            size={28} 
            color={color}
            style={styles.iconStyle} />
         <Text style={styles.labelStyle}>{label}</Text>
         <FontAwesome 
            name='search'
            size={28} 
            color={color}
            style={styles.iconRight} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    labelStyle:{
        fontSize:28,
        color: '#fff',
        fontWeight: '700',
        
    },
    iconStyle: {
        marginRight:10,
    },
    iconRight:{
        marginLeft: 130,
    }

});

export default IconLabel;