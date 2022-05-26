import {Image,View, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const fotos = {
    html:'https://logodownload.org/wp-content/uploads/2016/10/html5-logo.png',
    css:'https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-2834x4000.png',
    js: 'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png',
    react: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    java: 'https://brandslogos.com/wp-content/uploads/images/java-logo-1.png',
    git: 'https://img.icons8.com/fluency/344/github.png',
    mysql: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
    linkedin: 'https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png',
    email: 'https://www.freepnglogos.com/uploads/logo-outlook-png/microsoft-outlook-macos-icon-12.png',
}
function handleRede(rede){
    switch(rede){
        case 'fotos.git':
            Alert.alert('Meu Github:','https://github/ArtArtur')
        break
        case 'fotos.linkedin':
            Alert.alert('Meu Linkedin:','https://www.linkedin.com/in/artur-g-souza/')
        break
        case 'fotos.email':
            Alert.alert('Meus Emails: ','arturgfs@hotmail.com     arturgfsx@gmail.com')
    }
}

function Redes(){
    return (
        <>
        <View style={style.content}>
            <TouchableOpacity onPress={() =>handleRede('fotos.git')}>
         <Image style = {style.imagem} source = {{uri: fotos.git}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>handleRede('fotos.linkedin')}>
         <Image style = {style.imagem} source = {{uri: fotos.linkedin}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>handleRede('fotos.email')}>
         <Image style = {style.imagem} source = {{uri: fotos.email}}/>
            </TouchableOpacity>
      </View> 
        </>
    )
}

function Icones(){
    return (
        <>
     <View style={style.content}>
         <Image style = {style.imagem} source = {{uri: fotos.html}}/>
         <Image style = {style.imagem} source = {{uri: fotos.css}}/>
         <Image style = {style.imagem} source = {{uri: fotos.js}}/>
         <Image style = {style.imagem} source = {{uri: fotos.react}}/>
         <Image style = {style.imagem} source = {{uri: fotos.java}}/>
     </View> 
    </>
        )

}

export default function Fotos(){

    return (
        <>
         <Redes/>
         <Icones/>
        </>
    )
}

const style = StyleSheet.create({
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop:12,
    }
})