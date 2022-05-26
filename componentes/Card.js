import {View,Text, StyleSheet} from 'react-native';

export default function Card() {

    return (
        <>
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.header}>
                    <Text style={style.titulo}>      Experiência Profissional         </Text>
                </View>
                <View style={style.content}>
                    <Text style={style.texto}>Liferay - Aprendiz</Text>   
                    <Text style={style.texto}>04/2021 - 01/2022</Text>
                </View>
            </View>
            <View style={style.card}>
                <View style={style.header}>
                    <Text style={style.titulo}>         Formação Acadêmica           </Text>
                </View>
                <View style={style.content}>
                    <Text style={style.texto}>Análise e Dev. de Sistemas</Text>   
                    <Text style={style.texto}>04/2021 - 07/2023</Text>
                    <Text style={style.texto}>3º Período - Manhã</Text>
                </View>
            </View>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        marginTop:15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF'
    },
    content:{
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        color:'#939393',
        marginBottom:10,
    },
    titulo:{
        fontWeight: 'bold',
    }
})