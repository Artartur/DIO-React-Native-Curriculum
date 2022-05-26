import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

import Fotos from './componentes/Fotos'
import Card from './componentes/Card'


const perfil= 'https://avatars.githubusercontent.com/u/86370873?v=4';

const gradientHeight = 850;
const gradientBackground = '#322791';
const data = Array.from({length: gradientHeight})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>  
      <StatusBar style="auto" />
      
      {data.map((_, i)=>(<View key={i}style={{position: 'absolute',backgroundColor: gradientBackground,height: 2,top: (gradientHeight - i - 1),right: 0,left: 0,zindex: 2,opacity:(2.3 / gradientHeight) * (i + 1),}}></View>))}
  
    <View style={styles.content}>
      <Image style ={styles.avatar} source={{uri:perfil}}/>
      <Text style={styles.nome}>Artur Souza</Text>
      <Text style={styles.subtext}>FullStack Student</Text>
      <Fotos/>
      <Card/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content:{
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
    color: 'white',
  },
  avatar:{
    height: 100,
    width:100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom:5,  
  },
  nome:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  subtext:{
    fontSize: 18,
    color:'white',
  },
});
