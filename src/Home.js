import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../firebase/config'
import { FlashList } from '@shopify/flash-list'

const Home = () => {

    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    //Haetaan data firestoresta

    useEffect(() => {
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note, title} = doc.data();
                newNotes.push({note, title, id: doc.id});
            });
            setNotes(newNotes);
        });
    }, []);
    return (
        <View style={styles.container}>
            <FlashList 
            data = {notes}
            numColumns = {2}
            estimatedItemSize = {100}
            renderItem = {({ item }) => (
                <View style={styles.noteView}>
                    <Pressable
                        onPress={() => navigation.navigate('Detail', {item})}
                    >
                        <Text style={styles.noteTitle}>
                        {item.title}
                        </Text>
                        <Text style={styles.noteDescription}>
                        {item.note}
                        </Text>
                    </Pressable>
                </View>
            )}
            />
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NoteAdd')}
        >
                <Text style={styles.buttonText}>
                Add Note
                </Text>  
        </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    noteView: {
        flex: 1,
        backgroundColor:'#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
        alignItems: 'center'
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    noteDescription: {
        fontSize: 15,
        marginTop: 8

    },
    button: {
        position: 'absolute',
        bottom: 40,
        right: 130,
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    }
})