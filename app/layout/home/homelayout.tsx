import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Header = () => {
    const NavigationToSignIn = useNavigation();
    const HandleNavigateToSignIn = () => {
        NavigationToSignIn.navigate('Signin')
    }
    return (
        <View style={{ width: 412, maxHeight: 50, backgroundColor: '#3aa6b9', paddingHorizontal: 25 }}>
            <View style={{alignItems: 'center', flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'space-between'}}>
                <Text>KEEZARS</Text>
                <TouchableOpacity style={{ padding: 10, backgroundColor: 'white' }} onPress={HandleNavigateToSignIn}>
                    <Text>LOGINN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}