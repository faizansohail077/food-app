import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import RestaurentInfo from './components/Restaurent-info'

const Restaurent = () => {
    return (
        <View style={styles.container}>
            <FlatList style={styles.data} data={[{ name: 3 }, { name: 2 }, { name: 1 }, { name: 4 }, { name: 5 }]} keyExtractor={item => item.name} renderItem={() => <RestaurentInfo />} />
        </View>
    )
}
export default Restaurent
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    data: {
        flex: 1,
    }
})
