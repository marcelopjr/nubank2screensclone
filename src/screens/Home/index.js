import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge'

import Imagem from '../../assets/nunbankbackground.jpg'
import LogoBank from '../../assets/nunbanklogo.png'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Home = ({ navigation }) => {

    return (
        <>

            <View style={{ width: '100%', height: '100%' }}>

                <ImageBackground source={Imagem} style={{ width: '100%', height: '100%', alignItems: 'center' }} >

                    <View style={{ width: '100%', marginTop: 60, justifyContent: 'space-between', flexDirection: 'row' }}>

                        <Image source={LogoBank} style={{ width: 180, height: 150 }} />

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#7A4DAB', width: 80, borderRadius: 50, height: 40, marginTop: 60, marginRight: 10 }}>
                            <Text style={{ color: '#fff' }}>Brasil</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 220, width: '95%' }}>

                        <Text style={{ color: '#fff', fontSize: 45, fontWeight: '600' }}>
                            Um mundo
                            financeiro sem
                            complexidades
                        </Text>

                    </View>

                    <View style={{ width: '95%' }}>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 5, height: 55, marginTop: 15, borderWidth: 2, borderColor: '#fff', }}>
                            <Text style={{ color: '#9c44dc', fontWeight: 'bold' }}>COMEÇAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 5, height: 55, marginTop: 15, borderWidth: 2, borderColor: '#fff' }}>
                            <Text style={{ color: '#9c44dc', fontWeight: 'bold' }}>ENTRAR</Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>

        </>
    )
}