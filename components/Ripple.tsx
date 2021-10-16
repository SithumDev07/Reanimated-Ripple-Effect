import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface RippleProps {
    style: StyleProp<ViewStyle>;
    onTap?: () => void;
}

const Ripple: React.FC<RippleProps> = ({ style, onTap, children }) => {
    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default Ripple;
