/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 17:15:39
 * @version $Id$
 */
'use strict';
var React = require('react-native');

var {
  	StyleSheet,
  	View,
  	Text,
  TextInput,
  TouchableHighlight
} = React;

var AddAddress = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <View style={[styles.container,{backgroundColor:'white',padding:20,borderRadius: 10}]}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>收货人</Text>
          <TextInput
            style={styles.input}
            clearButtonMode='while-editing'
            placeholder="请输入收货人姓名"
            onChangeText={(text) => {}}/>
        </View>

         <View style={styles.inputRow}>
         <Text style={styles.label}>电话号码</Text>
         <TextInput
         keyboardType ='numeric'
         clearButtonMode='while-editing'
         style={styles.input}
         placeholder="请输入11位手机号"
         onChangeText={(text) => {}}/>
         </View>
         <View style={styles.inputRow}>
         <Text style={styles.label}>地址</Text>
         <TextInput
         style={styles.input}
         clearButtonMode='while-editing'
         placeholder="请输入地址"
         multiline={true}
         onChangeText={(text) => {}}/>
         </View>

        <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableHighlight style={styles.btn} underlayColor='#0057a84a' onPress={this.login}>
            <Text style={{color:'#fff'}}>添加地址</Text>
          </TouchableHighlight>
        </View>
        {/**/}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    marginLeft:15,
    marginRight:15,
    marginTop:100,
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
  input:{
    height:35,
    borderColor:'#ccc',
    color:'#000',
    flex:1,
    fontSize:14,
  },
  label: {
    width:70,
    fontSize: 14,
    color:'#000000'
  },
  btn:{
    height:35,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#CE93D8',
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#ffffff',
  }
});

module.exports = AddAddress;
