import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export const Header = () => {
    return (
        <View style={{ width: 412, maxHeight: 50, backgroundColor: '#3aa6b9', paddingHorizontal: 25 }}>
            <View style={{alignItems: 'center', flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'space-between'}}>
                <Text>KEEZARS</Text>
                <TouchableOpacity style={{ padding: 10, backgroundColor: 'white' }}>
                    <Text>LOGINN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}