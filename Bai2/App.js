//App.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Image,Dimensions} from 'react-native';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
    }
  }
   onLogin=()=>{
    
        if(this.state.username=='Nghi' && this.state.password=='12345'){
           Alert.alert("Success");
        }else{
          Alert.alert("Not Success");
        }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Username"
           placeholderTextColor="black"
           underlineColorAndroid="transparent"
           style={styles.txtInput}  onChangeText={(username) => this.setState({username:username})}/>
        <TextInput placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.txtInput}  onChangeText={(password) => this.setState({password:password})}/>
        <TouchableOpacity onPress={this.onLogin} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:30,
    color:'blue'
  },
  txtInput:{
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: DEVICE_WIDTH - 40,
     
    marginHorizontal: 20,
    padding:8,
    borderRadius: 20,
    color: '#000',
    marginTop:2
  },
  btnLogin:{
     width: DEVICE_WIDTH - 40,
     backgroundColor:'rgba(0,145,234,1)',
     padding:8,
     borderRadius: 20,
     marginTop:2
 
  },
  txtLogin:{
    color:'#fff',
    textAlign:'center'
  }
  
});
