import * as React from "react";
import { View, Text, StyleSheet, Dimensions,Image} from "react-native";

const Ealier =({info}) => {
    const {username,img,content,timeAct} =info;
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.avatarStyle}source={img}/> 
            <View>
                <View style={styles.contentStyle}>
                    <Text style={styles.userName}>{username}</Text>
                    <Text style={styles.textStyle}>{content}</Text>
                </View>
                <Text style={styles.timeCate}>{timeAct}</Text>
            </View>
           {/*  <Text>mentioned you in a comment</Text> */}
        </View>
    );
}
const deviceWidth = Dimensions.get("window").width;
const styles =StyleSheet.create ({
    cardContainer: {
        width:deviceWidth,
        height: 98,
        flexDirection: 'row',
    },
    avatarStyle:{
        width: 60,
        height: 60,
        margin: 15,
        borderRadius: 90,
    },
    contentStyle:{
        paddingTop:15,
        flexDirection: 'row',
        
    },
    userName:{
        fontSize: 16,
        fontWeight: '500',
    },
    textStyle:{
        fontSize: 16,
    },
    timeCate: {
        fontSize: 16,
        fontWeight: '500',
        color: '#908d8d',
    }
    
    },
);
export default Ealier;