import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import COLORS from '../../theme/theme'

type DetailTopBarProps = {
    onNavigateBack: () => void
}

export default function DetailTopBar({ onNavigateBack }: DetailTopBarProps) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={onNavigateBack}>
                <Icon name="chevron-left" size={28} color={"white"} />

            </Pressable>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        position: 'absolute',
        zIndex: 99,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginTop: 16
    },
    icon: {
        backgroundColor: 'red',

    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '10%'
    },
    backButton: {
        width: 28, // Adjust based on icon size
        height: 28, // Adjust based on icon size
        backgroundColor: COLORS.secondarytext,
        borderRadius: 12
    }
})