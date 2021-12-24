
 import React from 'react';
 // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image,
   } from 'react-native';
   import {
     Colors,
     DebugInstructions,
     Header,
     LearnMoreLinks,
     ReloadInstructions,
   } from 'react-native/Libraries/NewAppScreen';

//    import img from "./Assets/login1.png"
   import Login from "./Assets/LoginSvg.png"
      // import { Icon } from 'react-native-elements';
   // import Icon from 'react-native-vector-icons/FontAwesome5';
   
   //   import Icon from 'react-native-vector-icons/Ionicons';
     // import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
 
   
   const App = () => {
    
     return (
     <View>
       <View style={styles.nav}>
           <Text style={styles.navText}>LOGIN</Text>
       </View>

       <View style={styles.svgDiv}>
           <Image source={Login} style={styles.img} />

       </View>
 
       <View style={styles.bottom}>
         <TextInput 
           style={styles.input} 
           placeholder='Email Address'
           
           />
 
            <TextInput 
           style={styles.input} 
           placeholder='Password'
           
           />
            
           <TouchableOpacity
             style={styles.loginBtn}
           > 
             <Text style={styles.btnText}>LOGIN</Text>
           </TouchableOpacity>
           {/* <Icon size={24} color="white" name="movie" /> */}
       </View>

       <View style={styles.forgetDv}> 
           <Text>FORGET PASSWORD ?</Text>
           <Text>HELP?</Text>

       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   nav: {
     backgroundColor: '#F85201',
     height: 70,
     justifyContent:"center",
     alignItems:'center',
   },

   navText:{
       color:"white",
       fontWeight:"900",
       fontSize:29,
       letterSpacing:2,
   },
   bottom: {
     backgroundColor: '#F6F6F6',
     alignItems:"center",
     padding:10,
     
    
   },
 
   input: {
     
     padding:15,
     borderRadius:50,
     fontWeight:"bold",
     width:"90%",
     marginTop:20,
     backgroundColor:"#FDE4D8"
   },
 
   loginBtn:{
      backgroundColor:"#F85201",
      color:"",
      width:"90%",
      height:50,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      marginTop:30,
   },
 
   btnText:{
     color:"white",
     fontSize:18,
    //  fontWeight:"900",
    //  letterSpacing:2,
   },

   img:{
       height:150,
       width:120,
   },
   svgDiv:{
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"#F6F6F6",   
   },

   forgetDv:{
    //    backgroundColor:"#F6F6F6",
       flexDirection:"row",
       justifyContent:"space-around",
       fontWeight:"bold",
       
   },
 });


 export default App;