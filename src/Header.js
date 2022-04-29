import {StyleSheet, Text, View} from 'react-native'

const Header = ({ title }) => {
    return(
        <View style={StyleSheet.Header}>
            <Text style={StyleSheet.HeaderTitle}>{title}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
},
headerTitle: {
    color: 'black',
    fontSize: 18,
}

});

