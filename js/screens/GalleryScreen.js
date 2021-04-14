import React, { Component } from 'react';
import { ActivityIndicator, ImageBackground, Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { dataSource } from './../../data/data';

export default class GaleryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this._getData();
    }

    _getData = async () => {
        let data = dataSource;
        this.setState({ data });
    }

    _renderItem = ({ item }) => {
        let { cardText, card, cardImage, linearGradient } = styles;
        return (
            <TouchableOpacity
                style={card}
                imageStyle={{ borderRadius: 4 }}
                onPress={() =>
                    this.props.navigation.navigate('Details', {
                        item: item
                    })
                }
            >
                <ImageBackground style={cardImage} source={{ uri: item.imageUrl }}>
                    <LinearGradient
                        style={linearGradient}
                        colors={["#6DB1B5", "transparent"]}
                        start={[0.5, 0.5]}
                    >
                        <Text style={cardText}>{item.title}</Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    render() {
        let { container, loader } = styles;
        let { data } = this.state;
        if (data.length === 0) {
            return (
                <View style={loader}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <SafeAreaView style={container}>
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.title}
                    renderItem={this._renderItem}

                />
            </SafeAreaView>
        )
    }
}
/*   

   componentDidMount() {
       return fetch('http://localhost:3000')
           .then((response) => response.text())
           .then((responseString) => {
               this.setState({
                   isLoading: false,
                   dataSource: responseString
               });
           })
           .catch((error) => {
               console.error(error);
           });
   }
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        flexWrap: 'wrap'

    },
    cardText: {
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold'
    },
    card: {
        marginBottom: 10,
        marginLeft: '2%',
        marginRight: '2%',
        width: '46%',
        height: 300,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        borderRadius: 10,
    },
    cardImage: {
        flex: 1,
        height: '100%',
        resizeMode: 'cover',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        opacity: 0.80
    },
});
