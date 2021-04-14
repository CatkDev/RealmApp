import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends Component {
    render() {
        const item = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <Image style={styles.cardImage} source={{ uri: item.imageUrl }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.year}</Text>
                <Text>{item.artist}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: '80%'
    },
    cardImage: {
        width: '80%',
        height: '70%',
        resizeMode: 'contain',
        marginTop: 10
    },
    title: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        textAlign: 'center',
    }
});