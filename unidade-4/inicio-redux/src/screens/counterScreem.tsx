import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/src/slices/counter-slice";

export const CounterScreen = () => {

    const count = useSelector((state: any) => state?.counter?.value);
    const dispatch = useDispatch();

    return (
        <View style={style.container}>
            <TouchableOpacity 
                style={style.contentButton}
                onPress={() => {dispatch(increment())}}>

                <Text style={style.textButton}>+</Text>

            </TouchableOpacity>

            <Text style={style.counterText}>{count}</Text>

            <TouchableOpacity 
                style={style.contentRemoveButton}
                onPress={() => {dispatch(decrement())}}>

                <Text style={style.textButton}>-</Text>

            </TouchableOpacity>

        </View>
    )
}