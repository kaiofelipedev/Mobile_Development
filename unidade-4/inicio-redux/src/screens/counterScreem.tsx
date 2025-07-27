import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

export const CounterScreen = () => {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.contentButton}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>

            <Text style={style.counterText}>0</Text>

            <TouchableOpacity style={style.contentRemoveButton}>
                <Text style={style.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    )
}