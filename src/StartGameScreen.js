import {StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'
import {Button} from 'react-native-web'

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Select a number</Text>
            <View style={styles.inputContainer}>
                <TextInput />
                <View style={styles.ButtonContainer}>
                    <Button style={styles.Button} title="Reset"/>
                    <Button style={styles.Button} title="confirm"/>
                </View>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%', 
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: .26,
        shadowRadius: 2,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
    Button: {

    },
    ButtonContainer: {
        flexDirection: 'column',
        flex: 1
    }
});


export default StartGameScreen