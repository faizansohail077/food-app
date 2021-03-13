import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    console.log(searchQuery)
    return (
        <View style={styles.searchbar}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>

    )
}

export default Search

const styles = StyleSheet.create({
    searchbar: {
        marginTop: StatusBar.currentHeight,
        padding: 10,
        elevation: 1,
    }
})
