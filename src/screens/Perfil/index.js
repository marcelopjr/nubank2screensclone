import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge'

import Imagem from '../../assets/nunbankbackground.jpg'
import LogoBank from '../../assets/nunbanklogo.png'



import { styles } from './styles'

export const Perfil = () => {



    const [btn, setBtn] = useState([

        { nome: 'Pix', icon: 'rhombus-split-outline', key: '1' },
        { nome: 'Pagar', icon: 'barcode', key: '2' },
        { nome: 'Indicar Amigos', icon: 'account-plus-outline', key: '3' },
        { nome: 'Transferir', icon: 'bank-transfer-in', key: '4' },
        { nome: 'Depositar', icon: 'bank-transfer-out', key: '5' },
        { nome: 'Cartao Virtual', icon: 'credit-card-outline', key: '6' },
        { nome: 'Bloquear Cartao', icon: 'lock', key: '7' },
        { nome: 'Cobrar', icon: 'cash', key: '8' },
        { nome: 'Doacao', icon: 'bank-plus', key: '9' },
        { nome: 'Me Ajuda', icon: 'help', key: '10' },

    ])


    return (
        <>
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={{ color: '#fff', fontSize: 20, marginTop: 15 }}> Ola, Marcelo</Text>

                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#7A4DAB', width: 45, borderRadius: 50, height: 50, marginTop: 5 }}>
                            <Icon name="eye-outline" size={25} color='#fff' />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#7A4DAB', width: 45, borderRadius: 50, height: 50, marginTop: 5, marginLeft: 6 }}>
                            <Icon name="cog-outline" size={25} color='#fff' />
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>

                    <View style={styles.viewCreditCard}>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="credit-card-outline" size={25} color='#696969' />
                            <Text style={{ color: '#696969', marginTop: 3 }}> Cartao de Credito</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 13, color: '#696969' }}>Fatura atual</Text>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#87CEEB', marginTop: 5 }}>R$ 2641,20</Text>
                            <Text style={{ fontSize: 13, marginTop: 5 }}>Limite disponivel <Text style={{ color: '#006400', }}>R$ 765,80</Text> </Text>
                        </View>

                    </View>

                    <View style={styles.viewAccount}>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="cash" size={25} color='#696969' />
                            <Text style={{ color: '#696969', marginTop: 3 }}> Conta</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 13, color: '#696969' }}>Saldo disponivel</Text>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#000', marginTop: 5 }}>R$ 7545,55</Text>

                        </View>

                    </View>

                    <View style={styles.viewLifeSecurity}>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="umbrella-outline" size={25} color='#696969' />
                            <Text style={{ color: '#7A4DAB', fontWeight: '600', fontSize: 20, marginLeft: 5 }}> Seguro de vida</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 13, color: '#000', marginTop: 5 }}>Conheça Nubank Vida: um seguro simples e que sabe no bolso.</Text>

                            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#7A4DAB', borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 90, height: 40, marginTop: 10 }}>
                                <Text style={{ color: '#7A4DAB', fontWeight: 'bold', fontSize: 12 }}>
                                    CONHECER
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.viewWhatsPay}>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="whatsapp" size={25} color='#696969' />
                            <Text style={{ fontSize: 13, color: '#696969', marginTop: 3, marginLeft: 5 }}>Pagamentos no WhatsApp</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>

                            <Text style={{ fontSize: 15, color: '#000', marginTop: 5, fontWeight: 'bold' }}>Envie e receba dinheiro sem sair da conversa</Text>

                            <Text style={{ fontSize: 13, color: '#000', marginTop: 5 }}>Os pagamentos no WhatsApp são seguros, rápidos e
                            sem tarifas. Tão fácil quanto mandar uma foto de
                            "Bom dia!" no grupo da família. </Text>

                            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#7A4DAB', borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 120, height: 40, padding: 5, marginTop: 10 }}>
                                <Text style={{ color: '#7A4DAB', fontWeight: 'bold', fontSize: 12 }}>
                                    Quero conhecer
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.viewGooglePay}>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="google-play" size={25} color='#696969' />
                            <Text style={{ fontSize: 13, color: '#696969', marginTop: 3, marginLeft: 5 }}>Google Pay</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 13, color: '#000', marginTop: 5 }}>Use o Google Pay com seus cartões Nubank</Text>

                            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#7A4DAB', borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 200, height: 40, padding: 5, marginTop: 10 }}>
                                <Text style={{ color: '#7A4DAB', fontWeight: 'bold', fontSize: 12 }}>
                                    REGISTRAR MEU CARTÃO
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>

                <View style={styles.menuFooter}>

                    <ScrollView horizontal={true} style={{ width: '100%', padding: 15 }} showsHorizontalScrollIndicator={false} >

                        {btn.map((botao) =>

                            <TouchableOpacity style={{ flexDirection: 'column', backgroundColor: '#7A4DAB', borderRadius: 5, padding: 5, justifyContent: 'space-between', width: 80, marginRight: 10, height: 90 }} key={botao.key}>
                                <Icon name={botao.icon} size={25} color='#fff' />

                                <Text style={{ color: '#fff' }}>
                                    {botao.nome}
                                </Text>
                            </TouchableOpacity>)}

                    </ScrollView>

                </View>





            </View>


        </>
    )
}